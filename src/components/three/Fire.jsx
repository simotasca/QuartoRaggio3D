// rivisitation of SimonDev code in r3f way

import { useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import { Color, Float32BufferAttribute, TextureLoader, Vector3 } from 'three';

//#region SHADERS
const VS = `
uniform float pointMultiplier;
attribute float size;
attribute float angle;
attribute vec4 colour;
varying vec4 vColour;
varying vec2 vAngle;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size * pointMultiplier / gl_Position.w;
  vAngle = vec2(cos(angle), sin(angle));
  vColour = colour;
}`;

const FS = `
uniform sampler2D diffuseTexture;
varying vec4 vColour;
varying vec2 vAngle;
void main() {
  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
}`;
//#endregion

class LinearSpline {
  constructor(lerp) {
    this._points = [];
    this._lerp = lerp;
  }

  AddPoint(t, d) {
    this._points.push([t, d]);
  }

  Get(t) {
    let p1 = 0;

    for (let i = 0; i < this._points.length; i++) {
      if (this._points[i][0] >= t) {
        break;
      }
      p1 = i;
    }

    const p2 = Math.min(this._points.length - 1, p1 + 1);

    if (p1 == p2) {
      return this._points[p1][1];
    }

    return this._lerp((t - this._points[p1][0]) / (this._points[p2][0] - this._points[p1][0]), this._points[p1][1], this._points[p2][1]);
  }
}

const Fire = ({ position = [0, 0, 0], number = 30 }) => {
  const maxLife = 3;

  //#region splines
  const alphaSpline = new LinearSpline((t, a, b) => {
    return a + t * (b - a);
  });
  alphaSpline.AddPoint(0.0, 0.0);
  alphaSpline.AddPoint(0.1, 0.7);
  alphaSpline.AddPoint(0.6, 0.7);
  alphaSpline.AddPoint(1.0, 0);

  const colourSpline = new LinearSpline((t, a, b) => {
    const c = a.clone();
    return c.lerp(b, t);
  });
  colourSpline.AddPoint(0.0, new Color(0xffff80));
  colourSpline.AddPoint(1.0, new Color(0xff8080));

  const sizeSpline = new LinearSpline((t, a, b) => {
    return a + t * (b - a);
  });
  sizeSpline.AddPoint(0.0, 1.0);
  sizeSpline.AddPoint(0.5, 7.0);
  sizeSpline.AddPoint(1.0, 1.0);
  //#endregion

  //#region particles inizialization
  let particles = [];
  for (let i = 0; i < number; i++) {
    const life = (Math.random() * 0.75 + 0.25) * maxLife;
    particles.push({
      position: new Vector3(position[0] + (Math.random() * 2 - 1) * 0.7, position[1] + (Math.random() * 2 - 1) * 1, position[2] + (Math.random() * 2 - 1) * 0.7),
      size: (Math.random() * 0.5 + 0.5) * 4.0,
      life: life,
      maxLife: life,
      rotation: Math.random() * 2.0 * Math.PI,
      velocity: new Vector3(0, -4, 0),
      color: new Color()
    });
  }
  //#endregion

  //#region three animation loop
  useFrame((state, delta) => {
    for (let p of particles) {
      p.life -= delta;
      if (p.life <= 0) {
        p.position.x = position[0] + (Math.random() * 2 - 1) * 2;
        p.position.y = position[1] + (Math.random() * 2 - 1) * 1;
        p.position.z = position[2] + (Math.random() * 2 - 1) * 2;
        p.velocity.x = 0;
        p.velocity.y = -8;
        p.velocity.z = 0;
        p.life = p.maxLife;
        p.alpha = 1;
        p.color = new Color();
      }
    }

    for (let p of particles) {
      const t = 1.0 - p.life / p.maxLife;

      p.rotation += delta * 0.5;
      p.alpha = alphaSpline.Get(t);
      p.currentSize = p.size * sizeSpline.Get(t);
      p.color.copy(colourSpline.Get(t));

      p.position.add(p.velocity.clone().multiplyScalar(-delta));

      const drag = p.velocity.clone();
      drag.multiplyScalar(delta * 0.1);
      drag.x = Math.sign(p.velocity.x) * Math.min(Math.abs(drag.x), Math.abs(p.velocity.x));
      drag.y = Math.sign(p.velocity.y) * Math.min(Math.abs(drag.y), Math.abs(p.velocity.y));
      drag.z = Math.sign(p.velocity.z) * Math.min(Math.abs(drag.z), Math.abs(p.velocity.z));
      p.velocity.sub(drag);
    }

    const positions = [];
    const sizes = [];
    const colors = [];
    const angles = [];

    for (let p of particles) {
      positions.push(p.position.x, p.position.y, p.position.z);
      sizes.push(p.currentSize);
      colors.push(p.color.r, p.color.g, p.color.b, p.alpha);
      angles.push(p.rotation);
    }

    geometry.current.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.current.setAttribute('size', new Float32BufferAttribute(sizes, 1));
    geometry.current.setAttribute('colour', new Float32BufferAttribute(colors, 4));
    geometry.current.setAttribute('angle', new Float32BufferAttribute(angles, 1));
  });
  //#endregion

  const geometry = useRef();
  // const texture = useLoader(TextureLoader,"/resources/fire.png");
  const texture = useMemo(() => new TextureLoader().load('/resources/fire.png'), []);
  const pointMultiplier = useMemo(() => window.innerHeight / (2.0 * Math.tan((0.5 * 60.0 * Math.PI) / 180.0)));

  return (
    <Suspense fallback={null}>
      <points>
        <shaderMaterial
          uniforms={{ diffuseTexture: { value: texture }, pointMultiplier: { value: pointMultiplier } }}
          vertexShader={VS}
          fragmentShader={FS}
          depthTest={true}
          depthWrite={false}
          transparent={true}
          vertexColors={true}
        />
        <bufferGeometry ref={geometry} />
      </points>
    </Suspense>
  );
};
export default Fire;

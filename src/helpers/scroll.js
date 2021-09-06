import usePage from "../hooks/usePage";
import { sinInOut } from "./easing";

export const doScroll = (target, duration, scrollEndHandler) => {
  let start, previousTimeStamp;

  const origin = usePage().scrollTop;
  const delta = origin - target;
  const direction = delta < 0 ? 'down' : 'up';
  const val = Math.abs(delta);

  function anim(timestamp) {
    if (start === undefined)
      start = timestamp;
    const elapsed = timestamp - start;

    var p = sinInOut(elapsed / duration);
    let step = (elapsed * val * p) / duration;

    if (previousTimeStamp !== timestamp) {
      let count = Math.min(step, val);
      count = (direction == 'up' ? -count : count);
      usePage().scrollTo({ top: origin + count });
    }
    if (elapsed < duration) {
      previousTimeStamp = timestamp
      window.requestAnimationFrame(anim);
    } else {
      usePage().scrollTo({ top: target });
      scrollEndHandler && scrollEndHandler();
    }
  }
  window.requestAnimationFrame(anim);
}
import { Carousel, Col, Row } from 'react-bootstrap';
import Button from '../../buttons/Button';
import { Danger, Success } from '../../Span';
import Image from 'next/image';
import ofra from '../../../../public/resources/tortorella/ofra.png';
import ofra_tappo from '../../../../public/resources/tortorella/ofra_tappo.jpg';
import ofra_zoom from '../../../../public/resources/tortorella/ofra_zoom.png';
import due from '../../../../public/resources/tortorella/due.jpg';
import blend from '../../../../public/resources/tortorella/blend.png';
import blend_zoom from '../../../../public/resources/tortorella/blend_zoom.jpg';
import blend_tappo from '../../../../public/resources/tortorella/blend_tappo.jpg';

import bibenda from '../../../../public/resources/tortorella/premi/bibenda.jpg';
import gamberoRosso from '../../../../public/resources/tortorella/premi/gambero-rosso.jpg';
import extraBio from '../../../../public/resources/tortorella/premi/extrabio.jpg';
import flosOlei from '../../../../public/resources/tortorella/premi/flos-olei.png';
import oscarGreen from '../../../../public/resources/tortorella/premi/oscar-green.jpg';
import sirenaDoro from '../../../../public/resources/tortorella/premi/sirena-doro.jpg';
import slowOlive from '../../../../public/resources/tortorella/premi/slow-olive.jpg';
import slowFood from '../../../../public/resources/tortorella/premi/slow-food.jpg';

const Tortorella = () => (
  <>
    <div className="row mt-5">
      <h3>
        Supportiamo il made in <Danger>Italy.</Danger>
      </h3>
      <h5>Il nostro interesse è rivolto specialmente alle piccole imprese sul territorio nazionale, per promuovere l`&apos;`eccellenza locale.</h5>
      <Row className="mt-5">
        <Col md={12} lg={5} xl={4} className="d-flex flex-column justify-content-center">
          <Carousel indicators={false}>
            <Carousel.Item>
              <Image className="d-block w-100" src={ofra} alt="1 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100" src={ofra_tappo} alt="2 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100" src={ofra_zoom} alt="3 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100" src={due} alt="4 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100" src={blend} alt="5 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100" src={blend_zoom} alt="6 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100" src={blend_tappo} alt="7 slide" />
            </Carousel.Item>
          </Carousel>
          <div className="w-100 h-auto">
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src={bibenda} alt="no img" />
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src={gamberoRosso} alt="no img" />
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src={extraBio} alt="no img" />
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src={flosOlei} alt="no img" />
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src={oscarGreen} alt="no img" />
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src={sirenaDoro} alt="no img" />
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src={slowOlive} alt="no img" />
            <Image className="d-inline mt-2" style={{ width: 93 / 8 + '%' }} src={slowFood} alt="no img" />
          </div>
        </Col>
        <Col md={12} lg={7} xl={8} className="d-flex flex-column justify-content-center">
          <div className="ms-xl-5 mt-3 mt-lg-0">
            <h3>
              <Success>Olio</Success> Tortorella
            </h3>
            <h5>
              Prodotto nella terra del Cilento, è un olio biologico e kasher di alta qualità, vincitore di premi prestigiosi (tra cui 3 foglie Gambero Rosso e 5 gocce
              Bibenda).
            </h5>
            <Button className="float-end" onClick={() => window.open('https://www.tenutatortorella.it/')}>
              Vai al sito
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default Tortorella;

import { Carousel, Col, Row } from 'react-bootstrap';
import Button from '../../buttons/Button';
import { Danger, Secondary, Success } from '../../Span';

const Tortorella = () => (
  <>
    <div className="row mt-5">
      <h3>
        Supportiamo il made in <Danger>Italy.</Danger>
      </h3>
      <h5>Il nostro interesse è rivolto specialmente alle piccole imprese sul territorio nazionale, per promuovere l'eccellenza locale.</h5>
      <Row className="mt-5">
        <Col md={12} lg={5} xl={4} className="d-flex flex-column justify-content-center">
          <Carousel indicators={false}>
            <Carousel.Item>
              <img className="d-block w-100" src="resources/tortorella/ofra.png" alt="1 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="resources/tortorella/ofra_tappo.jpg" alt="2 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="resources/tortorella/ofra_zoom.png" alt="3 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="resources/tortorella/due.jpg" alt="4 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="resources/tortorella/blend.png" alt="5 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="resources/tortorella/blend_zoom.jpg" alt="6 slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="resources/tortorella/blend_tappo.jpg" alt="7 slide" />
            </Carousel.Item>
          </Carousel>
          <div className="w-100 h-auto">
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src="resources/tortorella/premi/bibenda.jpg" alt="no img" />
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src="resources/tortorella/premi/gambero-rosso.jpg" alt="no img" />
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src="resources/tortorella/premi/extrabio.jpg" alt="no img" />
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src="resources/tortorella/premi/flos-olei.png" alt="no img" />
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src="resources/tortorella/premi/oscar-green.jpg" alt="no img" />
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src="resources/tortorella/premi/sirena-doro.jpg" alt="no img" />
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%', marginRight: '1%' }} src="resources/tortorella/premi/slow-olive.jpg" alt="no img" />
            <img className="d-inline mt-2" style={{ width: 93 / 8 + '%' }} src="resources/tortorella/premi/slow-food.jpg" alt="no img" />
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

import { Carousel, Col, Row } from "react-bootstrap";

const Tortorella = () => (
  <>
    <div className="row">
      <h3>
        La cooperativa Quarto Raggio supporta il made in Italy, aiuta le piccole
        imprese per promuovere l'eccellenza locale.
      </h3>
      <a href="tortoref">Visita il sito...</a>

      <Row className="justify-content-center mt-5">
        <h3>I nostri prodotti</h3>
        <h5>
          I ricavati di Quarto Raggio sulla vendita dei prodotti sono devoluti
          nello sviluppo di opere sociali
        </h5>
        <Col md={8} lg={6} xl={6} className="mt-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="resources/ofra.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="resources/blend.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="resources/premi.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  </>
);

export default Tortorella;

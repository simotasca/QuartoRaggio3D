import { Carousel } from 'react-bootstrap';
import Button from '../../buttons/Button';
import { Danger, Success } from '../../Span';
import NextImage from '../../NextImage'

export default function Tortorella() {
  return (
    <>
      <div className="row mt-5">
        <h3>
          Supportiamo il made in <Danger>Italy.</Danger>
        </h3>
        <h5>Il nostro interesse è rivolto specialmente alle piccole imprese sul territorio nazionale, per promuovere l`&apos;`eccellenza locale.</h5>
        <div className="row mt-5">
          <div className="col-md-12 col-lg-5 col-xl-4 d-flex flex-column justify-content-center">
            <Carousel indicators={false}>
              <Carousel.Item>
                <NextImage src={'/resources/tortorella/ofra.png'} width={1011} height={1011} />
              </Carousel.Item>
              <Carousel.Item>
                <NextImage src={'/resources/tortorella/ofra_tappo.jpg'} width={1011} height={1011} />
              </Carousel.Item>
              <Carousel.Item>
                <NextImage src={'/resources/tortorella/ofra_zoom.png'} width={1011} height={1011} />
              </Carousel.Item>
              <Carousel.Item>
                <NextImage src={'/resources/tortorella/due.jpg'} width={1080} height={1080} />
              </Carousel.Item>
              <Carousel.Item>
                <NextImage src={'/resources/tortorella/blend.png'} width={1011} height={1011} />
              </Carousel.Item>
              <Carousel.Item>
                <NextImage src={'/resources/tortorella/blend_zoom.jpg'} width={940} height={940} />
              </Carousel.Item>
              <Carousel.Item>
                <NextImage src={'/resources/tortorella/blend_tappo.jpg'} width={940} height={940} />
              </Carousel.Item>
            </Carousel>
            <div className="d-flex flex align-items-center justify-content-between mx-0 mt-2">
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/bibenda.jpg'} width={300} height={300} />
              </div>
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/gambero-rosso.jpg'} width={630} height={380} />
              </div>
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/extrabio.jpg'} width={200} height={200} />
              </div>
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/flos-olei.png'} width={200} height={200} />
              </div>
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/oscar-green.jpg'} width={720} height={420} />
              </div>
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/sirena-doro.jpg'} width={443} height={543} />
              </div>
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/slow-olive.jpg'} width={600} height={605} />
              </div>
              <div className="d-inline-block w-100" >
                <NextImage src={'/resources/tortorella/premi/slow-food.jpg'} width={750} height={379} />
              </div>
            </div>
          </div>
          <div className="col col-md-12 col-lg-7 col-xl-8 d-flex flex-column justify-content-center">
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
          </div>
        </div>
      </div>
    </>
  );
}

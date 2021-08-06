import Button from "../../components/buttons/Button";
import { Danger, Success } from "../../components/Span";

const Kosher = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Un vero e proprio marchio di qualità</h3>
          <p className="text-center text-secondary fst-italic">
            "Parlate ai figli di Israele e dite loro: Questi sono gli animali
            che voi potrete mangiare. Ogni quadrupede che abbia uno zoccolo e
            che abbia in esso una fessura che lo divide in due e che rumini
            potrete mangiarlo." Levitico (11, 2:3)
          </p>
        </div>
        <div className="col-lg-3 my-auto px-5 px-lg-3">
          <img className="img-fluid" src="/resources/david.png" alt="..." />
        </div>
        <div className="col my-auto px-5 px-lg-2">
          <p>
            Il marchio kosher non solo è una garanzia di idoneità alla
            consumazione per ebrei praticanti, ma nel mercato si annuncia come
            prova di qualità e purezza del prodotto. Si tratta di preservare
            l'integrità spirituale di ciò che è realizzato nel corso della sua
            preparazione, ma i requisiti delle leggi della torah incidono sui
            metodi di lavoro e sulla scelta degli ingredienti, i quali sono
            anch'essi certificati idonei alla consumazione.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">
            I migliori enti di <Danger>Certificazione</Danger>
          </h3>
          <div className="row justify-content-around my-4">
            <img
              className="img-fluid col-3 col-md-2 my-auto"
              src="/resources/ou.svg"
              alt="..."
            />
            <img
              className="img-fluid col-3 col-md-2 my-auto"
              src="/resources/okk.jpg"
              alt="..."
            />
            <img
              className="img-fluid col-3 col-md-2 my-auto border border-3 border-dark rounded"
              src="/resources/euk.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="col my-auto px-5 px-lg-2">
          <p className="text-end h5">
            Trattiamo esclusivamente con i migliori enti certificatori europei e
            internazionali.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col my-auto text-center">
          <h3>
            <Success>Commercializzazione</Success> Prodotti
          </h3>
          <p className="h5">
            In seguito alla certificazione forniamo assistenza nella fase di
            commercializzazione.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col my-auto text-center mb-4">
          <h3>Richiedi una consulenza</h3>
          <Button>Contatti</Button>
        </div>
      </div>
    </>
  );
};

export default Kosher;

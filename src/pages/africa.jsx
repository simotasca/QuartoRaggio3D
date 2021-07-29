import { useContext, useEffect } from "react";
import Button2 from "../components/buttons/Button2";
import CenterSection from "../components/CenterSection";
import { macros } from "../helpers/macros";
import { MacroContext } from "../store/macroContext";

const AfricaPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.africa), [setCurrentMacro]);

  return (
    <CenterSection>
      <div className="container">
        <div className="row shadow pb-5 mt-5 mt-lg-0">
          <div className="col-12 text-end">
            <h1 className="m-0">La disparità si combatte con il servizio</h1>
            <h3 className="secondary">Serviamo i paesi in via di sviluppo per stabilire l&apos;equilibrio mondiale</h3>
          </div>
          <div className="col-10 mt-2">
            <p>
              Il servizio all&apos;umanità incomincia nei paesi in via di sviluppo, depredati delle loro risorse, costretti a seguire un progresso veloce e spietato.
              Nonostante la globale modernizzazione, il divario tra le nazioni è ancora abissale e mette luce su un problema reale a cui dare soluzioni concrete.
              <br />Quarto Raggio si impegna a dare un aiuto concreto alle raltà già presenti sul territorio, senza alcun ritorno finanziario, con l&apos;unico scopo di favorire lo sviluppo umano.
              Non è assolutamente nostro intento interferire con il lavoro, né condizionare la cultura e le pratiche religiose.
            </p>
          </div>
        </div>
        <div className="row shadow mt-2 pb-3" >
          <div className="row mt-3">
            <h1 className="m-0">Il villaggio <span className="warning text-nowrap">Baye Sa Rew</span></h1>
            <h3 className="secondary">Progetti Senegal</h3>
          </div>
          <div className="row mt-2 justify-content-end d-flex flex-wrap align-items-center">
            <div className="d-block d-md-none col-12 text-center ">
              {/*<Image src="resources/logoBSR.png" className="img-fluid shadow rounded" />*/}
            </div>
            <div className="col-xl-6 col-md-9 mt-4">
              <p>
                Sede di una comunità senegalese, necessita di supporto per aumentare la produttività e migliorare la qualità della vita dei suoi abitanti.
              </p>
              <Button2>Per sapene di più</Button2>
            </div>
            <div className="d-none d-md-block col-3 text-center">
              {/*<Image src="resources/logoBSR.png" className="img-fluid shadow rounded" />*/}
            </div>
          </div>
        </div>
      </div>
    </CenterSection>
  );
};

export default AfricaPage;

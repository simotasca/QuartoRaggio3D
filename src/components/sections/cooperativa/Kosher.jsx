import Button from '../../buttons/Button';
import { Danger, Success } from '../../Span';
import Image from 'next/image';
import davidImg from '../../../../public/resources/david.png';
import okkImg from '../../../../public/resources/koshers/okk.jpg';
import ouImg from '../../../../public/resources/koshers/ou.svg';
import eukImg from '../../../../public/resources/koshers/euk.jpg';

export default function Kosher() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">
            Un vero e proprio marchio di <Danger>Qualità</Danger>
          </h3>
          <p className="text-end text-secondary fst-italic">
            `&quot;`Parlate ai figli di Israele e dite loro: Questi sono gli animali che voi potrete mangiare. Ogni quadrupede che abbia uno zoccolo e che abbia in esso
            una fessura che lo divide in due e che rumini potrete mangiarlo.`&quot;` <span className="text-nowrap">Levitico (11, 2:3)</span>
          </p>
        </div>
        <div className="col-lg-3 my-auto px-5 px-lg-3">
          <Image className="img-fluid" src={davidImg} alt="..." />
        </div>
        <div className="col my-auto px-5 px-lg-2">
          <h5>
            Il marchio kasher garantisce l`&apos;`integrità spirituale del prodotto certificato e attribuisce idoneità alla consumazione di generi alimentari agli ebrei
            praticanti. Non solo, gli alimenti kasher sono preferiti da chi non consuma derivati animali per ragioni mediche e religiose.
          </h5>
        </div>
      </div>
      <div className="row mt-5">
        <h3>
          Una valida <Success>Alternativa</Success> per i piccoli produttori
        </h3>
        <h5>Nel mercato si annuncia come prova di qualità e purezza del prodotto e attira una clientela di nicchia in costante aumento.</h5>
      </div>
      <div className="row mt-5 text-end">
        <h3>
          Tra i Migliori Enti <Danger>Certificatori</Danger>
        </h3>
        <div className="d-flex justify-content-around my-4 w-100">
          <Image className="img-fluid w-xs-25 w-xl-10 my-auto" src={okkImg} alt="..." />
          <Image className="img-fluid w-xs-25 w-xl-10 my-auto" src={ouImg} alt="..." />
          <Image className="img-fluid w-xs-25 w-xl-10 my-auto" src={eukImg} alt="..." />
        </div>
        <h5>Trattiamo esclusivamente con certificatori di alto livello, di fama internazionale.</h5>
      </div>
      <div className="row mt-5">
        <div className="col my-auto">
          <h3>
            Commercio <Success>No-Profit</Success>
          </h3>
          <p className="h5">Il ricavato delle vendite è devoluto interamente alla realizzazione di opere umanitarie.</p>
          <Button>Progetti</Button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col my-auto text-end mb-4">
          <h5>Quarto raggio si impegna ad affiancare le aziende nella ricerca di clienti, sfruttando la conoscienza e l`&apos;`esperienza del mercato.</h5>
          <Button>Contatti</Button>
        </div>
      </div>
    </>
  );
}

import { useContext, useEffect } from 'react';
import { macros } from '../helpers/macros';
import { MacroContext } from '../store/macroContext';
import { Success } from '../components/Span';
import NextImage from '../components/NextImage';

const InclusionePage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.inclusione), [setCurrentMacro]);

  return (
    <div className="container-fluid">
      <div className="row">
        <h1>
          Articoli Quarto <Success>Raggio</Success>
        </h1>
        <hr />
        <h5>
          Uno dei moventi fondamentali del gruppo Quarto Raggio è la promozione dell`&apos;`ideale di fratellanza.
          <br />I nostri articoli non vogliono essere mezzi per la diffusione di informazioni, bensì utilizzare queste come pretesto per trasmettere un significato
          fondamentale.
        </h5>
        <span>Potentemente.</span>
      </div>

      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gap-3 mt-5">
        <a className="col" href="blog/cristianesimo">
          <div className="card p-2">
            <NextImage src={'/resources/articles/cristianesimo.jpg'} width={172} height={276} />
            <h4 className="m-1 ps-3">
              <b>Introduzione Cristianesimo</b>
            </h4>
          </div>
        </a>
        <a className="col" href="blog/cristianesimo">
          <div className="card p-2">
            <NextImage src={'/resources/articles/ebraismo.jpg'} width={170} height={275} />
            <h4 className="m-1 ps-3">
              <b>Introduzione Ebraismo</b>
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InclusionePage;

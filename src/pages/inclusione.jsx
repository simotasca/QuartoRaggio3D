import { useContext, useEffect, useLayoutEffect } from 'react';
import { macros } from '../helpers/macros';
import { MacroContext } from '../store/macroContext';
import { Success } from '../components/Span';
import MyLink from '../components/MyLink';

function Article() {
  return (
    <a className="col text-center" href="blog/cristianesimo">
      <img className="img-fluid " src="/resources/articles/cristianesimo.jpg" alt="..." />
      <div className="pt-2">
        <h5>
          <b>Introduzione al Cristianesimo</b>
        </h5>
      </div>
    </a>
  );
}

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
          Uno dei moventi fondamentali del gruppo Quarto Raggio è la promozione dell'ideale di fratellanza.
          <br />I nostri articoli non vogliono essere mezzi per la diffusione di informazioni, bensì utilizzare queste come pretesto per trasmettere un significato
          fondamentale.
        </h5>
        <span>Potentemente.</span>
      </div>

      <div class="row row-cols-2 row-cols-md-2 row-cols-xl-3 g-4 mt-5">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default InclusionePage;

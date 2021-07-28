import { useContext, useEffect, useMemo } from "react";
import MailForm from "../components/MailForm";
import { MacroContext, macros } from "../store/macroContext";

const AboutPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.comunita), [setCurrentMacro]);

  return (
    <div className="container mt-5">
      <div className="row mb-2">
        <h1>
          Unisciti alla <span className="warning">Comunità</span>
        </h1>
        <p className="secondary">
          E`&apos;` una comunità aperta a tutti: Se avete scelto di far parte di questa
          comunità collaborerete nel lavoro di gruppo. Aiutaci a realizzare
          progetti di solidarietà sociale, unendoti alla nostra community,
          oppure proponici nuove iniziative.
        </p>
      </div>

      <MailForm />

      <div className="row my-5">
        <h3>
          <span className="">Contatti - </span> Quarto{" "}
          <span className="success">Raggio</span>
        </h3>
        <p className="h5">
          <b>Email: </b>consulti.quarto.raggio@gmail.com
        </p>

        <p className="h5 mt-2">
          <b>Simone Tasca: </b>
        </p>
        <p className="my-0">
          <b>Mail: </b>simo.tasca@gmail.com
        </p>
        <p className="my-0">
          <b>Tel: </b>371 4820379
        </p>

        <p className="h5 mt-2">
          <b>Emanuele Hazan: </b>
        </p>
        <p className="my-0">
          <b>Mail: </b>emanuele.hazan@gmail.com
        </p>
        <p className="my-0">
          <b>Tel: </b>371 4173635
        </p>
      </div>

      <h3>
        Contatti - Baye Sa <span className="warning">Rew</span>
      </h3>
      <p className="h5 mt-2">
        <b>Boucounta Mbaye: </b>
      </p>
      <p className="my-0">
        <b>Tel: </b>METTI QUELLO DI BOUCOUNTA
      </p>
    </div>
  );
};

export default AboutPage;

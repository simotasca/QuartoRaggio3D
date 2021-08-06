import Button from "../../components/buttons/Button";
import MyLink from "../../components/MyLink";
import { Danger, Success } from "../../components/Span";

const CrowdFunding = () => (
  <>
    <div className="row">
      <div className="col-lg-4 my-auto px-5 px-lg-0 px-xl-3">
        <img
          className="img-fluid mb-2"
          src="/resources/funding.jpg"
          alt="..."
        />
      </div>
      <div className="col my-auto px-5 px-lg-2">
        <h3 className="text-center">
          Tutti i ricavati saranno devoluti alla realizzazione di opere{" "}
          <Success>umanitarie</Success>
        </h3>
        <div className={"text-center"}>
          <Button>
            <MyLink href={"/africa"}>I Nostri Progetti</MyLink>
          </Button>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col mt-4">
        <h4>
          <Success>Supportaci</Success>
        </h4>
        <p>
          Contribuisci e partecipa attivamente alla loro realizzazione, come
          volontario o come donatore.
        </p>
        <Button>
          <MyLink href={"/africa"}>Dona</MyLink>
        </Button>
      </div>
      <div className="col mt-4">
        <h4 className="card-title">Collabora</h4>
        <p className="card-text">
          Collabora alla diffuzione culturale come bene comune tra gli uomini.
        </p>
        <Button>
          <MyLink href={"/africa"}>Scopri</MyLink>
        </Button>
      </div>
      <div className="col mt-4">
        <h4 className="card-title">
          Proponi la tua <Danger>iniziativa</Danger>
        </h4>
        <p className="card-text">
          Se in linea con le nostre idee e praticamente realizzabile, noi ti
          aiuteremo.
        </p>
        <Button>
          <MyLink href={"/africa"}>Scopri</MyLink>
        </Button>
      </div>
    </div>
  </>
);

export default CrowdFunding;

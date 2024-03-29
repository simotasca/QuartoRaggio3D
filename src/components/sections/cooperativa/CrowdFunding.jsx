import Button from '../../buttons/Button';
import MyLink from '../../MyLink';
import NextImage from '../../NextImage';
import { Danger, Success } from '../../Span';

const CrowdFunding = () => (
  <>
    <div className="row mt-5">
      <div className="col-lg-4 my-auto px-xl-3">
        <NextImage src={'/resources/funding.jpg'} width={535} height={400} />
      </div>
      <div className="col my-auto px-2">
        <h3 className="text-center">
          Tutti i ricavati della cooperativa saranno devoluti alla realizzazione di opere <Success>umanitarie</Success>
        </h3>
        <div className={'text-center'}>
          <Button>
            <MyLink href={'/africa'}>I Nostri Progetti</MyLink>
          </Button>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col mt-4">
        <h4>
          <Success>Supportaci</Success>
        </h4>
        <p>Contribuisci e partecipa attivamente alla loro realizzazione, come volontario o come donatore.</p>
        <MyLink className="btn btn-success text-light">Dona</MyLink>
      </div>
      <div className="col mt-4">
        <h4 className="card-title">Collabora</h4>
        <p className="card-text">Collabora alla diffuzione culturale come bene comune tra gli uomini.</p>
        <MyLink className="btn btn-success text-light">Scopri</MyLink>
      </div>
      <div className="col mt-4">
        <h4 className="card-title">
          Proponi la tua <Danger>iniziativa</Danger>
        </h4>
        <p className="card-text">Se in linea con le nostre idee e praticamente realizzabile, noi ti aiuteremo.</p>
        <MyLink className="btn btn-success text-light">Scopri</MyLink>
      </div>
    </div>
  </>
);

export default CrowdFunding;

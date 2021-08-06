import { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CenterSection from "../components/CenterSection";
import ChangingElement from "../components/ChangingElement";
import ExpandibleTitle from "../components/ExpandibleTitle";
import { Danger, Success } from "../components/Span";
import { macros } from "../helpers/macros";
import CrowdFunding from "../sections/cooperativa/CrowdFunding";
import Kosher from "../sections/cooperativa/Kosher";
import Tortorella from "../sections/cooperativa/Tortorella";
import { MacroContext } from "../store/macroContext";

const CooperativaPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.cooperativa), [setCurrentMacro]);

  return (
    <>
      <CenterSection>
        <Row className="mb-5">
          <Col xs={12} className="mb-5">
            <h1 className="mb-3">
              Un&apos;associazione senza scopo di lucro, costituita per portare
              <span className="text-success"> solidarietà</span> sociale e un
              aiuto ai bisognosi
            </h1>
            <ChangingElement
              elements={[
                <p className="text-secondary h2 text-end">
                  Portiamo avanti progetti <b className="text-dark">sociali</b>
                </p>,
                <p className="text-secondary h2 text-end">
                  Organizziamo vendite per{" "}
                  <b className="text-dark">beneficenza</b>
                </p>,
                <p className="text-secondary h2 text-end">
                  Instauriamo <b className="text-dark">collaborazioni</b>{" "}
                  internazionali
                </p>,
              ]}
            />
          </Col>
        </Row>
      </CenterSection>

      <CenterSection>
        <ExpandibleTitle
          title={
            <>
              Certificazione <Danger>Kosher</Danger>
            </>
          }
          isToggled={false}
        >
          <Row className="col ms-4 mt-3">
            <Kosher />
          </Row>
        </ExpandibleTitle>

        <ExpandibleTitle title={"Crowd Funding"}>
          <Row className="col ms-4 mt-3">
            <CrowdFunding />
          </Row>
        </ExpandibleTitle>

        <ExpandibleTitle
          title={
            <>
              <Success>Olio</Success> Tortorella
            </>
          }
        >
          <Row className="col ms-4 mt-3">
            <Tortorella />
          </Row>
        </ExpandibleTitle>
      </CenterSection>
    </>
  );
};

export default CooperativaPage;

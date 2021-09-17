import dynamic from 'next/dynamic';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import CenterSection from '../components/CenterSection';
import ChangingElement from '../components/ChangingElement';
import ExpandibleTitle from '../components/ExpandibleTitle';
import { Danger, Success } from '../components/Span';
import { macros } from '../helpers/macros';
import usePage from '../hooks/usePage';
import CrowdFunding from '../components/sections/cooperativa/CrowdFunding';
import Kosher from '../components/sections/cooperativa/Kosher';
import Tortorella from '../components/sections/cooperativa/Tortorella';
import { MacroContext } from '../store/macroContext';

// const WirelessPrepaid = loadWirelessBundle ? WirelessPrepaidDynamicComponent : () => null;

const CooperativaPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.cooperativa), [setCurrentMacro]);

  const [expandibles, inView] = useInView({ threshold: 0.1, root: usePage() });

  // const sec1 = useRef();
  const sec2 = useRef();
  // useScrollSection([sec1, sec2], 500);

  const lostilo = {
    willChange: 'transform',
    // opacity: inView ? 1 : 0,
    transform: `translateX(${inView ? 0 : -100}%)`,
    transitionTimingFunction: 'ease-out'
  };

  const comb = useCallback((c) => {
    sec2.current = c;
    expandibles(c);
  });

  return (
    <>
      <CenterSection>
        <Row className="mb-5">
          <Col xs={12} className="mb-5">
            <h1 className="mb-3">
              Un&apos;associazione senza scopo di lucro, costituita per portare
              <span className="text-success"> solidarietà</span> sociale e un aiuto ai bisognosi
            </h1>
            {/*<ChangingElement
              elements={[
                <p key={0} className="text-secondary h2 text-end">
                  Portiamo avanti progetti <b className="text-dark">sociali</b>
                </p>,
                <p key={1} className="text-secondary h2 text-end">
                  Organizziamo vendite per <b className="text-dark">beneficenza</b>
                </p>,
                <p key={2} className="text-secondary h2 text-end">
                  Instauriamo <b className="text-dark">collaborazioni</b> internazionali
                </p>
              ]}
            />*/}
          </Col>
        </Row>
      </CenterSection>

      <CenterSection ref={comb}>
        <ExpandibleTitle
          title={
            <>
              Certificazione <Danger>Kosher</Danger>
            </>
          }
          style={{ ...lostilo, transition: !inView ? '0s' : '.3s .0s' }}>
          <Row className="col ms-4 mt-3">
            <Kosher />
          </Row>
        </ExpandibleTitle>
        <ExpandibleTitle title={'Crowd Funding'} style={{ ...lostilo, transition: !inView ? '0s' : '.3s .1s' }}>
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
          style={{ ...lostilo, transition: !inView ? '0s' : '.3s .2s' }}>
          <Row className="col ms-4 mt-3">
            <Tortorella />
          </Row>
        </ExpandibleTitle>
      </CenterSection>
    </>
  );
};

export default CooperativaPage;

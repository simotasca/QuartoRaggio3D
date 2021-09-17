import dynamic from 'next/dynamic';
import { useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import CenterSection from '../components/CenterSection';
import ChangingElement from '../components/ChangingElement';
import ExpandibleTitle from '../components/ExpandibleTitle';
import { Danger, Success } from '../components/Span';
import { macros } from '../helpers/macros';
import { MacroContext } from '../store/macroContext';

const CrowdFunding = dynamic(() => import('../components/sections/cooperativa/CrowdFunding'));
const Kosher = dynamic(() => import('../components/sections/cooperativa/Kosher'));
const Tortorella = dynamic(() => import('../components/sections/cooperativa/Tortorella'));

const CooperativaPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.cooperativa), [setCurrentMacro]);

  const ref = useRef();

  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap.from('.muovimi', {
  //     x: '-60%',
  //     opacity: 0,
  //     duration: 0.3,
  //     scrollTrigger: {
  //       scroller: usePage(),
  //       trigger: ref.current,
  //       //*markers: true,
  //       start: 'top center',
  //       end: 'bottom',
  //       toggleActions: 'play reset'
  //       //scrub: true
  //     },
  //     stagger: 0.15
  //   });
  // }, []);

  return (
    <>
      <CenterSection>
        <Row className="mb-5">
          <Col xs={12} className="mb-5">
            <h1 className="mb-3">
              Un&apos;associazione senza scopo di lucro, costituita per portare
              <span className="text-success"> solidarietà</span> sociale e un aiuto ai bisognosi
            </h1>
            <ChangingElement
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
            />
          </Col>
        </Row>
      </CenterSection>
      <CenterSection ref={ref}>
        <ExpandibleTitle
          title={
            <>
              Certificazione <Danger>Kosher</Danger>
            </>
          }>
          <Row className="col ms-4 mt-3">
            <Kosher />
          </Row>
        </ExpandibleTitle>
        <ExpandibleTitle
          title={
            <>
              Crowd <Success>Funding</Success>
            </>
          }>
          <Row className="col ms-4 mt-3">
            <CrowdFunding />
          </Row>
        </ExpandibleTitle>
        <ExpandibleTitle title={'I nostri Clienti'}>
          <Row className="col ms-4 mt-3">
            <Tortorella />
          </Row>
        </ExpandibleTitle>
      </CenterSection>
    </>
  );
};

export default CooperativaPage;

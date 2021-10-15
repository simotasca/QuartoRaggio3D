import dynamic from 'next/dynamic';
import { useContext, useEffect, useRef } from 'react';
import CenterSection from '../components/CenterSection';
import ChangingElement from '../components/ChangingElement';
import ExpandibleTitle from '../components/ExpandibleTitle';
import CrowdFunding from '../components/sections/cooperativa/CrowdFunding';
import Kosher from '../components/sections/cooperativa/Kosher';
import Tortorella from '../components/sections/cooperativa/Tortorella';
import { Danger, Success } from '../components/Span';
import { macros } from '../helpers/macros';
import { MacroContext } from '../store/macroContext';

// const CrowdFunding = dynamic(() => import('../components/sections/cooperativa/CrowdFunding'));
// const Kosher = dynamic(() => import('../components/sections/cooperativa/Kosher'));
// const Tortorella = dynamic(() => import('../components/sections/cooperativa/Tortorella'));

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
        <div className="row mb-5">
          <div className="col-12 mb-5">
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
          </div>
        </div>
      </CenterSection>
      <CenterSection ref={ref}>
        <ExpandibleTitle
          title={
            <>
              Certificazione <Danger>Kosher</Danger>
            </>
          }>
          <div className="row col ms-4 mt-3">
            <Kosher />
          </div>
        </ExpandibleTitle>
        <ExpandibleTitle
          title={
            <>
              Crowd <Success>Funding</Success>
            </>
          }>
          <div className="row col ms-4 mt-3">
            <CrowdFunding />
          </div>
        </ExpandibleTitle>
        <ExpandibleTitle title={'I nostri Clienti'}>
          <div className="row col ms-4 mt-3">
            <Tortorella />
          </div>
        </ExpandibleTitle>
      </CenterSection>
    </>
  );
};

export default CooperativaPage;

import { useContext, useEffect, useMemo } from 'react';
import Button from '../components/buttons/Button';
import CenterSection from '../components/CenterSection';
import MyLink from '../components/MyLink';
import { macros } from '../helpers/macros';
import { MacroContext } from '../store/macroContext';

const HomePage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.home), [setCurrentMacro]);

  return (
    <>
      <CenterSection>
        <h1 className="display-5" style={{ fontWeight: 'bold' }}>
          Uomini di Buona Volontà cooperano per l&apos;Unità
          <span className="d-lg-none">.</span>
          <span className="d-none d-lg-inline"> comunitaria, nazionale e internazionale:</span>
          <br />
          Nasce Quarto <span className="success">Raggio</span>
        </h1>
        <div className={'text-center mt-5'}>
          <Button style={{ fontSize: '20px' }}>
            <MyLink href={'/progetti'}>I Nostri Progetti</MyLink>
          </Button>
        </div>
      </CenterSection>
    </>
  );
};

export default HomePage;

import { useContext, useEffect } from 'react';
import { macros } from '../helpers/macros';
import { MacroContext } from '../store/macroContext';
import CenterSection from '../components/CenterSection';
import { Danger, Success } from '../components/Span';

const IntegrazionePage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.integrazione), [setCurrentMacro]);

  return (
    <CenterSection>
      <div className="text-center mb-5 pb-5">
        <h1 className="display-4" style={{ fontWeight: 'bold' }}>
          <Success>Integrazione</Success> Sociale
        </h1>
        <hr />
        <h1>
          <b>
            Coming <Danger>SOON</Danger>!
          </b>
        </h1>
      </div>
    </CenterSection>
  );
};

export default IntegrazionePage;

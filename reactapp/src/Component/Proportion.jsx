import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Asset/CSS/proportion.css';
import OutputPage from './Product'; // Corrected import

const Proportion = ({ selectedFlavors }) => {
  const [mlValues, setMlValues] = useState({});
  const [mixingInProgress, setMixingInProgress] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [displayProportionPage, setDisplayProportionPage] = useState(true);

  useEffect(() => {
    if (mixingInProgress) {
      const timeoutId = setTimeout(() => {
        setMixingInProgress(false);
        setAnimationCompleted(true);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [mixingInProgress]);

  const handleMlInputChange = (flavor, value) => {
    const updatedMlValues = { ...mlValues };
    updatedMlValues[flavor] = value;
    setMlValues(updatedMlValues);
  };

  const handleMixingClick = () => {
    setMixingInProgress(true);
  };

  const handleOutputButtonClick = () => {
    setShowOutput(true);
    setDisplayProportionPage(false);
  };

  return (
    <div>
      <h2>Proportion Page</h2>
      <div>
        {selectedFlavors && selectedFlavors.length > 0 ? (
          <div>
            <p>You selected the following flavors:</p>
            <ul>
              {selectedFlavors.map((flavor, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <span>{flavor} :</span>
                  <input
                    type="number"
                    min="0"
                    defaultValue={100}
                    onChange={(e) => handleMlInputChange(flavor, e.target.value)}
                  />
                  ml
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No flavors selected.</p>
        )}

        {Object.keys(mlValues).length > 0 && (
          <div>
            <p>Mixing proportions:</p>
            <ul>
              {Object.keys(mlValues).map((flavor) => (
                <li key={flavor}>
                  {flavor}: {mlValues[flavor]} mL
                </li>
              ))}
            </ul>
          </div>
        )}

        {!mixingInProgress && !animationCompleted && (
          <button type="button" onClick={handleMixingClick}>
            MIXING
          </button>
        )}

        {!showOutput && (
          <button type="button" onClick={handleOutputButtonClick}>
            Show Output
          </button>
        )}
      </div>

      <CSSTransition
        in={mixingInProgress}
        timeout={3000}
        classNames="fade"
        unmountOnExit
        onExited={() => setAnimationCompleted(true)}
      >
        <div className="mixing-animation">Mixing in progress...</div>
      </CSSTransition>

      {showOutput && <OutputPage />}
    </div>
  );
};

export default Proportion;

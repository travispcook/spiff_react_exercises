import React, { useState } from 'react';
import ProgressBar from './bar/ProgressBar.jsx';
import ButtonRow from './buttonRow/ButtonRow.jsx';
import { LOADING_STATES, BUTTON_TYPES } from './constants';

const Solution = () => {
  const { UNLOADED, LOADING, COMPLETE, PAUSED } = LOADING_STATES;
  const { START, FINISH } = BUTTON_TYPES;
  const [loadingStatus, setLoadingStatus] = useState(UNLOADED);

  const handleButtonClick = (buttonType) => {
    if (buttonType === START) {
      if (loadingStatus === UNLOADED) {
        setLoadingStatus(LOADING);
        setTimeout(() => {
          setLoadingStatus(PAUSED);
        }, 15000);
      } else {
        console.log('uh uh uh, you didnt say the magic password!'); // A little Jurassic Park humor
        return;
      }
    } else if (buttonType === FINISH) {
      setLoadingStatus(COMPLETE);
      setTimeout(() => {
        setLoadingStatus(UNLOADED);
      }, 3000);
    }
  }

  return (
    <div className="bar-outer">
      <ProgressBar loadingStatus={loadingStatus} />
      <ButtonRow loadingStatus={loadingStatus} handleOnClick={(buttonType) => handleButtonClick(buttonType)} />
    </div>
  );
};

export default Solution;
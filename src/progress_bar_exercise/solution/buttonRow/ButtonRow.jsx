import React from "react";
import './ButtonRow.scss';
import { LOADING_STATES, BUTTON_TYPES } from '../constants';

const ButtonRow = (props) => {
  const { UNLOADED, COMPLETE, PAUSED } = LOADING_STATES;
  const { START, FINISH } = BUTTON_TYPES;
  const { loadingStatus, handleOnClick } = props;
  const buttonText = loadingStatus === UNLOADED ? 'Start Request' : 'Loading...';
  const showFinishButton = loadingStatus === PAUSED || loadingStatus === COMPLETE;

  return (
    <div className="button-row">
      <button onClick={() => handleOnClick(START)}>{buttonText}</button>
      {showFinishButton && <button className="finish" onClick={() => handleOnClick(FINISH)}>Finish Request</button>}
    </div>
  )
}

export default ButtonRow;
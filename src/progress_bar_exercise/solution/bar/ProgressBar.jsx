import React from "react";
import './ProgressBar.scss';

const ProgressBar = (props) => {
  const { loadingStatus } = props;

  return (
    <div className="bar-container">
      <div className={'loading-bar ' + loadingStatus}></div>
    </div>
  );
}

export default ProgressBar;
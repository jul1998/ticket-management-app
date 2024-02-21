import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFire} className="text-red-400"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFire} className="text-red-400"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFire} className="text-red-400"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFire} className="text-red-400"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFire} className="text-red-400"></FontAwesomeIcon>
    </div>
  );
};

export default PriorityDisplay;

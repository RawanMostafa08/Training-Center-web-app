import React from "react";
import AddTrainingPlan from "./AddTrainingPlan";
import DatepickerComponent from "./DateR";
import BootstrapDatePickerComponent from "./DateR";
import DateR from "./DateR";
import ViewCurrentPlan from "./ViewCurrentPlan";
import ViewFeedback from "./ViewFeedback";

export default function Admin() {
  return (
    <>
      <div>
        <ViewFeedback />
        <ViewCurrentPlan />
        <DateR />
      </div>
    </>
  );
}

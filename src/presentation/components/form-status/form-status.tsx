import React from "react";
import { Spinner } from "../spinner/spinner";

import Styles from "./form-status-styles.scss";

export const FormStatus = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span>ERROR!!!</span>
    </div>
  );
};
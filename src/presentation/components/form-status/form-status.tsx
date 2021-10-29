import { FormContext } from "@/presentation/contexts/form/form-context";
import React, { useContext } from "react";
import { Spinner } from "../";

import Styles from "./form-status-styles.scss";

export const FormStatus = () => {
  const { isLoading, errorMessage } = useContext(FormContext);

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

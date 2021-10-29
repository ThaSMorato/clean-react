import React from "react";

import Styles from "./input-styles.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: InputProps) => {
  const eneableInput = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.readOnly = false;
  };

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={eneableInput} />
      <span className={Styles.status}>🔴</span>
    </div>
  );
};

import React from "react";

import Styles from "./spinner-styles.scss";

type SpinnerProps = React.HTMLAttributes<HTMLDivElement>;

export const Spinner = (props: SpinnerProps) => (
  <div className={`${Styles.spinner} ${props.className}`}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

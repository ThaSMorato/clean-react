import { memo } from "react";
import { Logo } from "../";

import Styles from "./login-header-styles.scss";

const LoginHeaderComponent = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Enquetes para Programadores</h1>
  </header>
);

export const LoginHeader = memo(LoginHeaderComponent);

import { memo } from "react";

import Styles from "./footer-styles.scss";

const FooterComponent = () => <footer className={Styles.footer}></footer>;

export const Footer = memo(FooterComponent);

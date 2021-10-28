import React from "react";
import { Spinner } from "@/presentation/components/spinner/spinner";
import { LoginHeader } from "@/presentation/components/login-header/login-header";
import { Footer } from "@/presentation/components/footer/footer";

import Styles from "./login-styles.scss";

export const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type='email' name='email' placeholder='Digite seu e-mail' />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type='password' name='password' placeholder='Digite sua senha' />
          <span className={Styles.status}>🔴</span>
        </div>
        <button type='submit'>Entrar</button>
        <a href='/'>Criar conta</a>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span>ERROR!!!</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

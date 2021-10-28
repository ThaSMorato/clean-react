import React from "react";
import { Spinner } from "@/presentation/components/spinner/spinner";
import { LoginHeader } from "@/presentation/components/login-header/login-header";
import { Footer } from "@/presentation/components/footer/footer";

import Styles from "./login-styles.scss";
import { Input } from "@/presentation/components/input/input";

export const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Digite seu e-mail' />
        <Input type='password' name='password' placeholder='Digite sua senha' />
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

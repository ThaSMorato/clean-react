import { Footer, FormStatus, Input, LoginHeader } from "@/presentation/components";
import React from "react";

import Styles from "./login-styles.scss";

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
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

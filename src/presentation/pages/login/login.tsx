import React from "react";

import { LoginHeader } from "@/presentation/components/login-header/login-header";
import { Footer } from "@/presentation/components/footer/footer";
import { FormStatus } from "@/presentation/components/form-status/form-status";

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
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

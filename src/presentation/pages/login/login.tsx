import { Footer, FormStatus, Input, LoginHeader } from "@/presentation/components";
import { FormContext } from "@/presentation/contexts/form/form-context";
import React, { useState } from "react";

import Styles from "./login-styles.scss";

type State = {
  isLoading: boolean;
  errorMessage: string;
};

export const Login: React.FC = () => {
  const [state, setState] = useState<State>({ isLoading: false, errorMessage: "" });

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input type='password' name='password' placeholder='Digite sua senha' />
          <button type='submit'>Entrar</button>
          <a href='/'>Criar conta</a>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  );
};

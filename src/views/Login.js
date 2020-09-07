import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterUserModal from "../components/RegisterUserModal";
import Test from "../components/Test";
import { Button, ButtonToolbar, Modal } from "rsuite";

function Login() {
  const [register, setRegister] = useState(false);

  return (
    <>
      <h1 className="text-center">Welcome to Twitter</h1>
      <LoginForm />
      <h2>See what's happening in the world right now</h2>
      <p> Join Twitter Today</p>

      <div className="modal-container">
        <ButtonToolbar>
          <Button onClick={() => setRegister(true)}>Sign Up</Button>
        </ButtonToolbar>

        <RegisterUserModal
          show={register}
          onHide={() => setRegister(false)}
        ></RegisterUserModal>
      </div>
    </>
  );
}

export default Login;

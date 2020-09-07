import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterUserModal from "../components/RegisterUserModal";
import Test from "../components/Test";
import {
  Button,
  ButtonToolbar,
  Modal,
  Container,
  Content,
  FlexboxGrid,
  Panel
} from "rsuite";

function Login() {
  const [register, setRegister] = useState(false);

  return (
    <>
      <div className="show-container">
        <Container>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={8}>
                <Panel
                  header={
                    <h3 style={{ textAlign: "center", color: "DeepSkyBlue" }}>
                      Log in to Twitter
                    </h3>
                  }
                  bordered
                >
                  <LoginForm />
                  <div className="modal-container">
                    <ButtonToolbar>
                      <Button onClick={() => setRegister(true)}>
                        Sign Up
                      </Button>
                    </ButtonToolbar>
                    <RegisterUserModal
                      show={register}
                      onHide={() => setRegister(false)}
                    ></RegisterUserModal>
                  </div>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    </>
  );
}

export default Login;

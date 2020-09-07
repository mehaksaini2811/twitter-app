import React, { useState } from "react";

import {
  Modal,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Container,
  Content,
  FlexboxGrid,
  Button
} from "rsuite";

function RegisterUserModal(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [check, setCheck] = useState(false);

  const [registerationDetails, setRegistrationDetails] = useState({
    name: "",
    email: "",
    dateOfBirth: ""
  });

  const nextButton = () => {
    if (currentStep === 3) {
      return null;
    }
    return (
      <Button
        style={{ marginInlineStart: "auto" }}
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Next
      </Button>
    );
  };

  const previousButton = () => {
    if (currentStep === 1) return null;
    return (
      <Button
        style={{ marginInlineEnd: "auto" }}
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        Previous
      </Button>
    );
  };
  const handleChange = event => {
    setRegistrationDetails({
      ...registerationDetails,
      [event.target.name]: event.target.value
    });
  };
  const toggleCheckbox = () => {
    setCheck(!check);
  };
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centred
    >
      <Modal.Header style={{ display: "flex", justifyContent: "flex-end" }}>
        {previousButton()}
        {nextButton()}
      </Modal.Header>
      <Step1
        stepNumber={currentStep}
        name={registerationDetails.name}
        email={registerationDetails.email}
        dateOfBirth={registerationDetails.dateOfBirth}
        change={handleChange}
      ></Step1>
      <Step2
        stepNumber={currentStep}
        check={check}
        checkbox={toggleCheckbox}
      ></Step2>
      <Step3
        stepNumber={currentStep}
        name={registerationDetails.name}
        email={registerationDetails.email}
        dateOfBirth={registerationDetails.dateOfBirth}
      ></Step3>
    </Modal>
  );
}

function Step1(props) {
  if (props.stepNumber !== 1) {
    return null;
  }

  return (
    <>
      <div className="show-container">
        <Container>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <h3 style={{ textAlign: "center", color: "DeepSkyBlue" }}>
                  Create your Account
                </h3>
                <Form>
                  <FormGroup>
                    <ControlLabel for="name">Name</ControlLabel>
                    <FormControl
                      type="name"
                      class="form-control"
                      name="name"
                      id="name"
                      value={props.name}
                      placeholder="Enter your Name"
                      onChange={props.change}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel for="email">Email</ControlLabel>
                    <FormControl
                      type="email"
                      class="form-control"
                      name="email"
                      value={props.email}
                      id="registerEmail"
                      placeholder="Enter your Email address"
                      onChange={props.change}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel htmlFor="dateOfBirth">
                      Date of birth
                    </ControlLabel>
                    <FormControl
                      type="date"
                      class="form-control"
                      id="dob"
                      name="dateOfBirth"
                      value={props.dateOfBirth}
                      onChange={props.change}
                    />
                  </FormGroup>
                </Form>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    </>
  );
}
function Step2(props) {
  if (props.stepNumber !== 2) return null;
  return (
    <div>
      <h2>
        <strong>Customize your experience</strong>
      </h2>
      <br />
      <h3>
        <strong>Track where you see Twitter content across the web</strong>
      </h3>
      <div className="form-check">
        <label htmlFor="info" className="col-sm-10">
          Twitter uses this data to personalize your experience. This web
          browsing history will never be stored with you name, email or phone
          number
        </label>
        <input
          type="checkbox"
          name="check"
          className="form-check-input"
          id="signup-check"
          checked={props.check}
          onChange={props.checkbox}
        ></input>
      </div>
    </div>
  );
}

function Step3(props) {
  if (props.stepNumber !== 3) return null;
  return (
    <UserForm
      name={props.name}
      email={props.email}
      dateOfBirth={props.dateOfBirth}
    />
  );
}

const UserForm = props => {
  return (
    <div>
      <div className="form-group">
        <label for="name">Name</label>
        <input type="name" class="form=control" value={props.name} readOnly />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form=control"
          value={props.email}
          readOnly
        />
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date of birth</label>
        <input
          type="date"
          class="form-control"
          value={props.dateOfBirth}
          readOnly
        />
      </div>
      <div class="col-md-12 text-center">
        <button className="btn btn-primary float-center">Sign Up</button>
      </div>
    </div>
  );
};

export default RegisterUserModal;

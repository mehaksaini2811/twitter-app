import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

import {
  Modal,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Container,
  Content,
  FlexboxGrid,
  Button,
} from 'rsuite'

function RegisterUserModal(props) {
  const [currentStep, setCurrentStep] = useState(1)
  const [check, setCheck] = useState(false)
  const [registrationDetails, setRegistrationDetails] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    password:''
  })
  const ADD_USER = gql`
    mutation SignUpUser($input: signUpData!) {
      signUp(input: $input) {
        email
        password
      }
    }
  `
  const [signUp, { data }] = useMutation(ADD_USER)

  const nextButton = () => {
    if (currentStep === 3) {
      return null
    }
    return (
      <Button
        style={{ marginInlineStart: 'auto' }}
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Next
      </Button>
    )
  }

  const previousButton = () => {
    if (currentStep === 1) return null
    return (
      <Button
        style={{ marginInlineEnd: 'auto' }}
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        Previous
      </Button>
    )
  }

  const handleChange = (value, event) => {
    setRegistrationDetails({
      ...registrationDetails,
      [event.target.name]: event.target.value,
    })
  }

  const SignUpUser = () => {
    signUp({
      variables: {
        input: {
          name: registrationDetails.name,
          email: registrationDetails.email,
          password:registrationDetails.password,
          dateOfBirth:registrationDetails.dateOfBirth
        },
      },
    })
      .then(() => {
        console.log('signup successful')
      })
      .catch((err) => {
        console.log(err)
      })
    //console.log("exit"+data)
  }

  const toggleCheckbox = () => {
    setCheck(!check)
  }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centred
    >
      <Modal.Header style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {previousButton()}
        {nextButton()}
      </Modal.Header>
      <Step1
        stepNumber={currentStep}
        name={registrationDetails.name}
        email={registrationDetails.email}
        dateOfBirth={registrationDetails.dateOfBirth}
        password={registrationDetails.password}
        change={handleChange}
      ></Step1>
      <Step2
        stepNumber={currentStep}
        check={check}
        checkbox={toggleCheckbox}
      ></Step2>
      <Step3
        stepNumber={currentStep}
        name={registrationDetails.name}
        email={registrationDetails.email}
        dateOfBirth={registrationDetails.dateOfBirth}
        password={registrationDetails.password}
        onSignup={SignUpUser}
      ></Step3>
    </Modal>
  )
}

function Step(props) {
  return (
    <>
      <div className="show-container">
        <Container>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Form>
                  <FormGroup>
                    <ControlLabel htmlFor="name">Name</ControlLabel>
                    <FormControl
                      type="name"
                      className="form-control"
                      name="name"
                      id="name"
                      value={props.name}
                      placeholder="Enter your Name"
                      onChange={props.change}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel htmlFor="email">Email</ControlLabel>
                    <FormControl
                      type="email"
                      className="form-control"
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
                      className="form-control"
                      id="dob"
                      name="dateOfBirth"
                      value={props.dateOfBirth}
                      onChange={props.change}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel htmlFor="password">
                      Password
                    </ControlLabel>
                    <FormControl
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={props.password}
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
  )
}
function Step1(props) {
  if (props.stepNumber !== 1) {
    return null
  }
  return (
    <>
      <h3 style={{ textAlign: 'center', color: 'DeepSkyBlue' }}>
        Create your Account
      </h3>
      <Step
        name={props.name}
        email={props.email}
        dateOfBirth={props.dateOfBirth}
        password={props.password}
        change={props.change}
      ></Step>
    </>
  )
}
function Step2(props) {
  if (props.stepNumber !== 2) return null
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
  )
}
function Step3(props) {
  if (props.stepNumber !== 3) return null
  return (
    <>
      <Step
        name={props.name}
        email={props.email}
        dateOfBirth={props.dateOfBirth}
        password={props.password}
      />
      <Button type="submit" appearance="primary" onClick={props.onSignup}>
        Sign Up
      </Button>
    </>
  )
}

export default RegisterUserModal

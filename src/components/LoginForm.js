import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Message
} from "rsuite";
function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <Form fluid onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <FormControl
            name="email"
            type="email"
            inputRef={register({
              required: true,
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, 4}$"
            })}
          />
          {errors.email && (
            <Message type="error" description="Email is required" />
          )}
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            inputRef={register({ required: true })}
          />
          {errors.password && (
            <Message type="error" description="Password is required" />
          )}
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
export default LoginForm;

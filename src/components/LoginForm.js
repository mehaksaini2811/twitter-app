import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "rsuite";
function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <Form fluid onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <input
            name="email"
            type="email"
            ref={register({
              required: true,
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, 4}$"
            })}
          />
          {errors.email && <span>Email is required</span>}
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
export default LoginForm;

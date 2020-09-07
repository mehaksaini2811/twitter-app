import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            ref={register({
              required: true,
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, 4}$"
            })}
          />
          {errors.email && <span>Email is required</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>
        <input type="Submit" />
      </form>
    </>
  );
}
export default LoginForm;

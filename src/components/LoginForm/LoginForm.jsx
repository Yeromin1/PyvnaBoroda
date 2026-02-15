import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input id={loginId} type="text" name="login" />

      <label htmlFor={passwordId}>Password</label>
      <input id={passwordId} type="password" name="password" />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

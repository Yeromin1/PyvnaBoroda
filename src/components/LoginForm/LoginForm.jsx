import { useContext, useId, useState } from "react";
import { authContext } from "../context/Authorization/Authorization";

const LoginForm = ({ onLogin }) => {
  const { logins } = useContext(authContext);
  const [username, setUsername] = useState("");
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
    logins(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        id={loginId}
        type="text"
        name="login"
      />

      <label htmlFor={passwordId}>Password</label>
      <input id={passwordId} type="password" name="password" />

      <button type="submit">Login</button>
    </form>
  );
};

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     setValues({
//       login: "",
//       password: "",
//     });
//   };

//   const handleChange = (evt) => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

export default LoginForm;

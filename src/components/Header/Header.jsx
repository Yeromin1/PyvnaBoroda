// import BookList from "../BookList";

import { useContext } from "react";
import { authContext } from "../context/Authorization/Authorization";

// const favBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
// ];

// const Header = () => {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favBooks} />
//     </>
//   );
// };

// export default Header;

const Header = () => {
  const { user, logout } = useContext(authContext);
  return (
    <header>
      <h3>Welcome, {user}</h3>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;

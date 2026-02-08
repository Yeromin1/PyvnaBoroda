// import Product from "./Product.jsx";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// import BookList from "./BookList.jsx";

// const favBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favBooks} />
//     </>
//   );
// }

// import { HiUser } from "react-icons/hi";
// import { FcAcceptDatabase } from "react-icons/fc";

// export default function App({ name }) {
//   return (
//     <div>
//       <p>
//         <FcAcceptDatabase className="my-icon" size="24" /> {name}
//       </p>
//     </div>
//   );
// }

// import Alert from "./Alert.jsx";
// import Header from "./Header/Header.jsx";

// const App = () => {
//   const handleClick = () => {
//     console.log("Button clicked");
//   };

//   return (
//     <>
//       <Header />
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
//       <button onClick={handleClick}>Click me!</button>
//     </>
//   );
// };

// const App = () => {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(evt) => console.log(evt)}>Second button</button>
//     </>
//   );
// };

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => console.log(message)}>{children}</button>;
// };

// const names = ["bob", ...["donald"], "suzy", "lacy", ...["richard", "alex"]];
// console.log(names);

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// import { useState } from "react";

// const App = () => {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// import { useState } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

import ClickCounter from "./ClickCounter/ClickCounter.jsx";

const App = () => {
  return (
    <>
      <ClickCounter />
      <ClickCounter />
    </>
  );
};

export default App;

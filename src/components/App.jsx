// import Product from "./Product.jsx";

import { useEffect, useState } from "react";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar ";
import Radio from "./Radio/Radio";
import Checkbox from "./Checkbox/Checkbox";
import Filter from "./Filter/Filter";
import Task from "./FilterTask/FilterTask";
import Form from "./FilterForm/FilterForm";
import TasksList from "./FilterTasksList/FilterTasksList";
import initialTasks from "../data/forbes.json";
import FeedbackForm from "./FilterForm/FilterForm";
import axios from "axios";
import ArticleList from "./ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "../articles-api";
import SearchForm from "./SearchForm/SearchForm";
import Player from "./Player/Player";
import UserMenu from "./UserMenu.jsx";

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

// import ClickCounter from "./ClickCounter/ClickCounter.jsx";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// import { useState } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// import { useState } from "react";

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useEffect, useState } from "react";

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// сохранение и считывание данных с localStorage
// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return Number(savedClicks);
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// const App = () => {
//   // const handleLogin = (data) => {
//   //   console.log("User:", data);
//   // };

//   // const [lang, setLang] = useState("uk");

//   // const [tasks, setTasks] = useState(initialTasks);
//   // const [filter, serFilter] = useState("");

//   // const addTask = (newTask) => {
//   //   setTasks((prev) => {
//   //     return [...prev, newTask];
//   //   });
//   // };

//   // const visibleTasks = tasks.filter((task) =>
//   //   task.name.toLowerCase().includes(filter.toLowerCase()),
//   // );

//   // const deleteTask = (taskId) => {
//   //   setTasks((prev) => {
//   //     return prev.filter((task) => task.id !== taskId);
//   //   });
//   // };

//   // /*LESSON 4*/

//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);

//         const data = await fetchArticlesWithTopic("react");
//         setArticles(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       {/* <h1>Authorization</h1>
//       <LoginForm onLogin={handleLogin} />

//       <SearchBar />

//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />

//       <Radio />

//       <Checkbox />

//       <Form onAdd={addTask} />
//       <Filter value={filter} onFilter={serFilter} />
//       <TasksList tasks={visibleTasks} onDelete={deleteTask} />

//       <FeedbackForm /> */}

//       {/* LESSON 4 */}
//       <h2>Latest articles</h2>

//       <SearchForm onSearch={handleSearch} />

//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// import { useMemo } from "react";

// const App = () => {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter((planet) => planet.includes(query)),
//     [planets, query],
//   );

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map((planet) => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

const App = () => {
  return (
    <div>
      <h1>Context example</h1>
      <UserMenu />
    </div>
  );
};

export default App;

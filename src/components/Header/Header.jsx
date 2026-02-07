import BookList from "../BookList";

const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const Header = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
    </>
  );
};

export default Header;

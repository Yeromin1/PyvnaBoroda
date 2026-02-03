export default function Product({ name, imgUrl, price }) {
  return (
    <>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </>
  );
}

// export default function BookList({ books }) {
//   return (
//     <ul>
//       {books.map((book) => {
//         return <li key={book.id}>{book.name}</li>;
//       })}
//     </ul>
//   );
// }

import './App.css';
import Book from './Components/Book.js'
import { booksData } from './bookData'

const App = () => {
  const bookData = booksData;
  return (
    <>
      <h1>Book List 👩‍💻</h1>
      {bookData.map((booky, idx) => {
        return <Book
          title={booky.title}
          author={booky.author}
          url={booky.url}
          short={booky.shortDescription}
          image={booky.coverImageUrl}
          publisher={booky.publisher}
          pubDate={booky.publicationDate}
          long={booky.detailedDescription}
          key={booky.idx}
          />
      })}
    </>
  );
};

export default App

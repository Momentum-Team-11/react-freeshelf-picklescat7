import './App.css';
// import 'bulma/css/bulma.min.css';
import Book from './Components/Book.js';
import { booksData } from './bookData';
// import pic from './img_not_avail.png';


const App = () => {
  const bookData = booksData;
  return (
    <>
      <div className="header">
        <h1>Freeshelf: Little Free Library of Code 📚</h1>
      </div>
        <h1 className="page-title">Book List</h1>
        <div className="book-container">
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
            key={idx}
            />
        })}
        </div> 
    </>
  );
};

export default App

// import { useState } from 'react'

const Book = ({title, author, short, image, url, publisher, pubDate, long }) => {
  console.log(publisher);
  // publisher = {publisher} && "Not available"
  // if (publisher === null) { publisher = "Not Available"} else { publisher }
  // const [expanded, setExpanded] = useState(false)
  return (
    <div className="booky">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{short}</p>
      <div>
        <img src={image} alt={`${title} Cover`} className="thumbnail" />
      </div>
      <p>URL: <a href={url}>{url}</a></p>
      <p>Publisher: {publisher || "Not available"}</p>
      <p>Publication date: {pubDate || "Not available"}</p>
      <p>Full description: {long}</p>
    </div>
  )
};

{/* always show: title author shortDescription coverImageURl  */}
{/* hidden: url publisher publicationDate detailedDescription */}
export default Book
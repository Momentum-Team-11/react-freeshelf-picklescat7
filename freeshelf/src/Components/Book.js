import { useState } from 'react'

const Book = ({title, author, short, image, url, publisher, pubDate, long}) => {
const [expanded, setExpanded] = useState(false)
  
  return (
    <div className="booky">
      <div>
        <img 
          src={image} 
          alt="Book cover"
          className="thumbnail" 
          onError={event => {
            event.target.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg"
            event.oneerror = null
          }}
          />
      </div>
      <h2><b>{title}</b></h2>
      <h3>{author}</h3>
      <p>{short}</p>
      {expanded ? (
        <div>
          <button className="less" aria-expanded="false" onClick={() => setExpanded(false)}>Show less</button>
            <p><b>URL:</b> <a href={url}>{url}</a></p>
            <p><b>Publisher:</b> {publisher || "Not available"}</p>
            <p><b>Publication date:</b> {pubDate || "Not available"}</p>
            <p>Full description: {long}</p>
        </div>
        ) : (
          <button className="more" aria-expanded="true" onClick={() => setExpanded(true)}>Show more</button>
        )}
      </div>
  )
};

{/* always show: title author shortDescription coverImageURl  */}
{/* hidden: url publisher publicationDate detailedDescription */}
export default Book


// import pic from './img_not_avail.png'
// import { ExpandMore } from '@material-ui/icons';
// import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';–
import React from 'react'
import { useParams } from 'react-router';

function Stream(props) {
   
 const so =`https://www.youtube.com/embed/${props.Id}`
  
    return (
        <div>
            <iframe src={so} width="640" height="360" allowFullScreen title="Video player" />
        </div>
    )
}

export default Stream;

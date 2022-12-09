import React from 'react'
import './elements.css'
function Article({story}) {
    console.log('The story: ',story)
  return (
    <div className="story">
            <div className="headline">{story.title}</div>
            <div className="description">
                <div className="image">
                <img src={story.urlToImage} alt="image" />
                </div>
                <div className="short_desc">
                    {story.description}
                </div>
            </div>
            <a href={story.url} target='_blank'>Read Full Story</a>
    </div>
  );
}

export default Article
import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => { // replaces the line below ES6 syntax before it would be   const VideoListItem = (props) => {
    // const video = props.video;                                                              // const video = props.video; }
    const imageUrl = video.snippet.thumbnails.default.url;
    console.log(video);
    return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl}/>
            </div>
            <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
           </div>
       </div>
    </li>  
     );                                                  
    };
export default VideoListItem;   //this script is to organize each individual video with the same uniform style.
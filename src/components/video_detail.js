import React from 'react';

const VideoDetail = ({video}) => {                                  //this script finds and collects the video details requested by YTSearch in index.js
  if (!video) {                                                     //this creates a 'loading...' to allow the video info to be retreive before reat.js renders the page
      return <div>Loading...</div>;
  }
   const videoId = video.id.videoId;                                //this variable grabs the info from 'id' inside of 'video'
   const url = `https://www.youtube.com/embed/${videoId}`;
    return (                                                        //after the video information is retrieved the data below will be shown
        <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className='details'></div>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    );
};

export default VideoDetail;
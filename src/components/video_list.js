import React from 'react';
import VideoListItem from './video_list_item';





const VideoList = (props) => {              //this creates a constant called video list sets it equal to a function that organizes the items from index.js array videos[]
    const videoItems = props.videos.map((video) => {        //another constant is created within video list, what this does is organizes each individual video from the video list
        return <VideoListItem
        onVideoSelect={props.onVideoSelect}
         key={video.etag }
         video={video} />     //this retrievs the layout from videoListItem to add the specific video key
    }); 

    return (  //this is Bootstrap code that wraps the videoListItem
        <ul className="col-md-4 list-group">   
         {videoItems}
         </ul>
    );
};

export default VideoList;  //this exports the variable/constant VideoList to be used by diffrent scripts in the project if called.
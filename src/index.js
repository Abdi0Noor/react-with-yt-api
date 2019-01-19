import _ from'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';
import API_KEY from './private/api';

//LOCALHOST:8080
// const App = function (){
//       return <div>SUP SQAUD FAM</div>;
// }
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
          };

        this.videoSearch('React js');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {  
            this.setState({
            videos: videos,  
            selectedVideo: videos[0]  
            });
        });
    }



      render () {   //this renders on the DOM our results
                    //a div is created using JSX for search bar videodetails and videolist
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 700);
       
         return (   
        <div>      
             <SearchBar onSearchTermChange={videoSearch} />
             <VideoDetail video={this.state.selectedVideo} />
             <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
             
        </div>);
        
      }
}


ReactDOM.render (<App />,document.querySelector('.container'));  //this calls reactjs's ReactDOM to render the above items
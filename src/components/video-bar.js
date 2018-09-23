import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import App from '../App.js';

class VideoBar extends Component {






  render() {

    const {videos, fromVideoBarToAppStateVideo} = this.props;


    let makeVideoFromVideoBarMain = (value, index)=>{

      console.log(value);
      fromVideoBarToAppStateVideo(value , index)
    }


    let renderVileoList = videos.map((value, index, arr)=>{

     return(
        <li style={{cursor: "pointer"}} className="list-group-item" key={index} onClick={()=>{makeVideoFromVideoBarMain(value , index)}}>
          <div className="video-list media">
              <div className="video-list media">
                  <div className="media-left">
                      <img className="media-object" src={value.snippet.thumbnails.default.url} />
                  </div>
              </div>
              <div className="media-body">
                  <div className="media-heading">{value.snippet.title}</div>
              </div>
          </div>
      </li>)
    })

    return(

    <ul className="col-md-4 list-group">
        {renderVileoList}
      </ul>
    )
  }
}

export default VideoBar;

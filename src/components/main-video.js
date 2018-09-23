import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import App from '../App.js';

class MainVideo extends Component {
  render() {




  if (!this.props.video) {

        return (
          <div className="video-detail col-md-8">
              Loading....
          </div>

        )

      }else {
        let url = `https://www.youtube.com/embed/${this.props.video[0].url}`
        return (
          <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe title="random" src = {url} />
          </div>

          <div className="details">
          <div>
          {this.props.video[0].title}
          </div>
          <div>
          {this.props.video[0].description}
          </div>
          </div>
          </div>
        )
      }


          }
        }

export default MainVideo;

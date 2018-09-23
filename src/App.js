import React, { Component } from 'react';
import MainVideo from './components/main-video.js';
import TopComponentWithSearch from './components/top-сomponent-with-search.js';
import VideoBar from './components/video-bar.js';
import YTSearch from 'youtube-api-search';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state= {
      videos: [],
      key: `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`,
    }

  }


  fromVideoBarToAppStateVideo=( videos , index)=>{
    let videoArr = [...this.state.videos]; // from state
    let valueArr = [videos] // video witch was oncliked


    videoArr[index] = videoArr[0]
    videoArr.splice(index, 1)
    let allVideos = valueArr.concat(videoArr) // concat first video to videos set

    this.setState({
      videos: allVideos,
    })
  }

  documentWillMount(){

    {term =>{
      YTSearch({
        key: this.state.key,
        term}, data => {
          this.setState({
            videos: data,
          })
        });
    }}
  }


  render() {
    const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

    console.log(this.state.videos);

if (!this.state.videos[0]) {
  // console.log("hello");
  return (
    <main className="container">
    <div>
    <TopComponentWithSearch
      onChange = {term =>{
        YTSearch({
          key: this.state.key,
          term}, data => {
            this.setState({
              videos: data,
            })
          });
      }}

    />
    </div>
      </main>
  )
  }else {
    return (
      <main className="container">
      <TopComponentWithSearch
        onChange = {term=>{
          YTSearch({
            key: this.state.key,
            term,
          }, data => {

              this.setState({
                videos: data,
              })

          })
        }}
      />
      <div className="row">
      <MainVideo
      video = {[
        {
          title: this.state.videos[0].snippet.title,
          description: this.state.videos[0].snippet.description,
          url: this.state.videos[0].id.videoId,
        }
      ]}

      />
      <VideoBar
      videos={this.state.videos}
      fromVideoBarToAppStateVideo = {this.fromVideoBarToAppStateVideo}
      />
      </div>
      </main>
    );

  }
  }
}

export default App;

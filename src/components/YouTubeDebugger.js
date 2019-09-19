// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {resolution: '1080p'}
      }
    }
  }

  changeBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }

  render(){
    return (
      <div>
      <button className='bitrate' onClick={this.changeBit}>change bit rate</button>
      <button className='resolution' onClick={this.changeRes}>change resolution rate</button>
      </div>
    )
  }

}

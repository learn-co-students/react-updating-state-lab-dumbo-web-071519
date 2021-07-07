// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
            }
        }
    }
   
    altBitrate =()=>{
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    altRes =()=>{
        const {settings } = this.state
            this.setState({
                settings: {
                    ...settings,
                    video :{ ...settings.video,
                    resolution: '720p'
                    }
                }
            })

    }
    render( ){
        console.log(this.state.settings.video.resolution)
        return (
            <div>
            <button className="bitrate" onClick={this.altBitrate}>Change Bitrate  {this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.altRes}>Up {this.state.settings.video.resolution} Resolution</button>
            </div>
        )
    }
}

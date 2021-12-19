import React, { Component } from 'react'

class PitchUpload extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
          <input type='file' name='csv' onChange={(Event) => this.props.onUploadPitch(Event.target.files[0])}/>
        </div>
    )
  }
}

export default PitchUpload
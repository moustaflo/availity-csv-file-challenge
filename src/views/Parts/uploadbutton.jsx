import React, { Component } from 'react'

class UploadButton extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
          <button 
          type='button' 
          disabled={this.props.uploadResponse === 'Uploading...' || this.props.uploadedFile === ''? true: false}
          onClick={() => this.props.onClickHandler()}>{'Upload'}
          </button>
        </div>
    )
  }
}

export default UploadButton
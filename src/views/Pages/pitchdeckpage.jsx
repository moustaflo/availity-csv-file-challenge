import React, { Component } from 'react';
import axios from 'axios';
import PitchUpload from '../Parts/pitchupload.jsx';
import UploadButton from '../Parts/uploadbutton.jsx';

class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      uploadedFile: '',
      uploadResponse: '',
      uploadResponseColor: '',
      images: [],
    }
  }

  fileTypeCheck = ()=> {
    let fileToCheck = this.state.uploadedFile 
    // Accepted file types
    const fileTypes = ['text/csv']

    if (fileTypes.every(type => fileToCheck.type !== type)) return false

    return true
  
  }

  onUploadPitch = (userInput) => {
    this.setState({
      uploadedFile: userInput
    })
  }

  onClickHandler = () => {
    if (this.fileTypeCheck()) {
      const fileData = new FormData()
      fileData.append('file', this.state.uploadedFile)
      this.setState({
      uploadResponse: 'Uploading...',
      uploadResponseColor: 'black'
      })
      axios.post('/api/upload', fileData).then((response) => {
        this.setState({
          uploadResponse: response.data.uploadResponse,
          uploadResponseColor: 'green',
          images: response.data.images
        })
      }).catch((error) => {
        this.setState({
          uploadResponse: error,
          uploadResponseColor: 'red'
        })
      })
    } else {
      this.setState({
        uploadResponse: 'the file extension for ' + this.state.uploadedFile['name'] + ' is not accepted at this time',
        uploadResponseColor: 'red'
      })
    }
  }

  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h2 style={{background: 'white', color: this.state.uploadResponseColor}}>
          {this.state.uploadResponse}
        </h2>
        <PitchUpload onUploadPitch={this.onUploadPitch}></PitchUpload>
        <br/>
        <UploadButton 
        onClickHandler={this.onClickHandler} 
        uploadResponse={this.state.uploadResponse} 
        uploadedFile={this.state.uploadedFile} 
        companyName={this.state.companyName} 
        companyMotto={this.props.companyMotto}>
        </UploadButton>
      </div>
    )
  }
}

export default Welcome

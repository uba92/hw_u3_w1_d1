import { Component } from 'react'

class ImageComponent extends Component {
  render() {
    return (
      <img
        className={`${this.props.spacingStyle} ${this.props.borderRadius}`}
        src={this.props.url}
        alt={this.props.alt}
      />
    )
  }
}

export default ImageComponent

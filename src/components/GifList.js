import React from 'react'

class GifList extends React.Component {


  render () {
    return (
      <div>
        <li>
          <img src={this.props.gif.images.original.url} />
        </li>
      </div>
    );
  }
}

export default GifList
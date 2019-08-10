import React from 'react';
import GifList from '../components/GifList';
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  constructor () {
    super()
    this.state={
      gifs: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newSearch = e.target.search.value;
    fetch(
      "http://api.giphy.com/v1/gifs/search?q=" +
        newSearch +
        "&api_key=dc6zaTOxFJmzC&rating=g"
    )
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        gifs: data.data.slice(0, 3)
      })
      // console.log(data.data.slice(0, 3));
    })
  }


  render () {
    return (
      <div>
        <ul>
          {this.state.gifs.map(gif => {
            return <GifList gif={gif} />
          })}
        </ul>
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default GifListContainer;
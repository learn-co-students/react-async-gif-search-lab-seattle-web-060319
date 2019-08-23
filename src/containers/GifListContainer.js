// fetches data from the API, stores the first 3 gifs from the response in its component state and passes that down to the child, giflist as a prop
// also render gifsearch cmpt that renders the form
// pass down submit handler function to gifsearch

import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }


  fetchGifs = query => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(({ data }) => {
        let urls = data.map(x => x.images.original.url)
        this.setState({ gifs: urls })
      })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchGifs()
  }

}
import React from 'react';

class GifSearch extends React.Component {

  state = { query: "" }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          id="user-input"
          placeholder="Enter giphy search term"
          value={this.state.query}
          onChange={e => this.setState({ query: e.target.value })} />

        <input type="submit" />
      </form >
    )
  }
}

export default GifSearch
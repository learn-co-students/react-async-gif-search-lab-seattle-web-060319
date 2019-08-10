import React from "react";

class GifSearch extends React.Component {
  constructor () {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    const newSearch = e.target.value;
    this.setState({
      search: newSearch
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} >
          <input type='text' name='search' value={this.state.search} onChange={this.handleChange}/>
          <input type='submit' value='search'/>
        </form>
      </div>
    );
  }
}

export default GifSearch

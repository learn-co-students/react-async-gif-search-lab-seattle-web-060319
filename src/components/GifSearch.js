import React from 'react'

export default class GifSearch extends React.Component{

    state = {
        input: ""
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getGifs(this.state.input)
        this.setState({
            input: ""
        })
    }
   
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name="search" value={this.state.input}/>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}
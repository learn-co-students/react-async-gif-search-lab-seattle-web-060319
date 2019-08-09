import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

        state = {
            gifs: []
        }

        mapGifs = () => {
            return( 
                this.state.gifs.map((gif) => {
                   return <GifList gif={gif}/>
                })
            )
        }

        getGifs = (searchTerm) => {
            fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(data => {
                let results = [data.data[0], data.data[1], data.data[2]]
                this.setState({
                    gifs: [...results]
                })
            })
        }

        render(){
        return(
            <div>
                <GifSearch getGifs={this.getGifs}/>
                <ul>
                    {this.mapGifs()}
                </ul>
            </div>
        )
    }
}
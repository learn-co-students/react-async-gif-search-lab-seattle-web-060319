import React from 'react'

function GifList(props) {
    if(!!props.gif.images){
    return(
        <li>
            <img src={props.gif.images.original.url} alt=""/>
        </li>
    )
    }
    else{return null}
}

export default GifList
import React from 'react'
import { IMAGE_URL } from '../utils/constants'
export default function Image(props) {
    return (
        <img src={`${IMAGE_URL}${props.src}`} className={props.className} alt={props.alt}/>
    )
}

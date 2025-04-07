import { React, useState } from 'react'
import data from "./data.js"

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.title}>{item.image}</li>
            ))}
        </ul>
    )
}

export default List

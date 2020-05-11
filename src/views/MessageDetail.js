import React from 'react'

const allMessages = [
    {
        id:1,
        title:"message001",
        content:"content 1"
    },
    {
        id:2,
        title:"message002",
        content:"content 2"
    },   
    {
        id:3,
        title:"message003",
        content:"content 3"
    },
    {
        id:4,
        title:"message004",
        content:"content 4"
    }
]


export default function MessageDetail(props) {
    
    const {id} = props.match.params
    const message = allMessages.find( m => m.id === id*1)

    return (
        <div>
           <ul>
               <li>ID: {message.id} </li>
               <li>TITLE: {message.title} </li>
               <li>CONTENT: {message.content} </li>
           </ul>
        </div>
    )
}

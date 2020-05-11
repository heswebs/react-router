import React, { Component } from 'react'
import MyNavLink from '../components/MyNavLink'
import {Route} from 'react-router-dom'

import MessageDetail from '../views/MessageDetail'

export default class Message extends Component {

    state = {
      messages: []
    }
    componentDidMount(){
        setTimeout(() => {
            const messages = [
                {
                    id:1,
                    title: "message001"
                },
                {
                    id:2,
                    title: "message002"
                },
                {
                    id:3,
                    title: "message003"
                },
                {
                    id:4,
                    title:"message004"
                }
            ]    
            this.setState({messages})
        },1000)

    }

    render() {
        return (
            <div>
               <ul>
                  {
                      this.state.messages.map((m, index)=> (
                          <li key={index}>
                              <MyNavLink to={`/home/message/${m.id}`}>{m.title}</MyNavLink>
                          </li>
                      ))
                  }
               </ul> 
               <Route path="/home/message/:id" component={MessageDetail} />
            </div>
        )
    }
}

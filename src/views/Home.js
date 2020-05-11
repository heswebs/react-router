import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import News from '../views/News'
import Messages from '../views/Message'
import MyNavLink from '../components/MyNavLink'

export default function Home() {
    return (
     <>   
       <nav>
           <ul>
               <li>
                    <MyNavLink to="/home/news">News</MyNavLink>
               </li>
               <li>
                     <MyNavLink to="/home/message">Message</MyNavLink>
               </li>
           </ul>
       </nav>

       <Switch>
           <Route path="/home/news" component={News}></Route>
           <Route path="/home/message" component={Messages}></Route>
           <Redirect to="home/news" />
       </Switch>
    </>
    )
}

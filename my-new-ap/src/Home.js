import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return (
            <div>
                <div>This is Home!</div>
                <div><Link to = "/Eason/">to Eason</Link></div>
            </div>
        )
    }
}
export default Home;
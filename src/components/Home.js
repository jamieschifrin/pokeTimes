import React, {Component} from "react"
// import axios
import axios from 'axios'
// axios is used to serve and fetch API's to and from react and node.
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component{

    state = {
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // console.log("response: ", res)
            this.setState({
                posts: res.data.slice(0,10)

            })
        })

    }

    render (){

        const {posts} = this.state

        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className= "post card" key={post.id}>
                        <img src={Pokeball}alt="a pokeball"/>
                        <div className='card-content'>
                            <Link to={"/" + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                           
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>

        )


    return(
        <div className="container h
        ome">
            <h4 className="center">Home</h4>
           {postList}
        </div>
    )
  }
}

export default Home
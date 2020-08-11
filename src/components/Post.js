
import React, {Component} from 'react'
import axios from 'axios'
class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        // console.log(this.props)
        let newID = this.props.match.params.post_id
        // console.log(newID)
        axios.get('https://jsonplaceholder.typicode.com/posts/'+newID)
        .then(res=> {
            this.setState({
                post: res.data
            })
        }

        )
    }
    render() {
        const post =  this.state.post ? (
            <div className="post">
                <h4 className="post">
                    {this.state.post.title}
                </h4>
                <p>
                    {this.state.post.body}
                </p>
            </div>
         ):(
             <div className='center'>Loading Post ...</div>
          )
        return (
            <div className='container'>
                {post}
            </div>
        )
    }
}
export default Post






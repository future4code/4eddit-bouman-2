import React, {Component} from "react";
import { routes } from "../Router"
import { getPosts } from "../../actions"
import { connect } from "react-redux";





export class PostList extends Component {
    componentDidMount(dispatch) {
        this.props.getPosts()
    }

    render(){
        return(
            <div>
               
                <p>Post List</p>

                <div>
                    {this.props.posts.map((posts)=>
                    <p>
                      {posts.text}  
                      {posts.username}
                    </p>
                    )}

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.allPosts,
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts())

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList);
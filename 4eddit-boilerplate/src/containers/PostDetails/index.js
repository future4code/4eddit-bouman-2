import React, { Component } from "react";
import PostList from "../PostList";
import { connect } from "react-redux";
import { getPosts } from "../../actions";


class PostDetails extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getPosts(this.props.posts)
    }

    render(){
        const { selectedPost } = this.props;

        console.log(this.props.selectedPost.comments)

        return(
            <div>
                Post Details
                    
                    <div>
                        <p>{selectedPost.text}</p>
                        <p>{selectedPost.title}</p>
                        
                    </div>
                    {selectedPost.comments && selectedPost.comments.map((itemPost) =>
                        <div>
                            <p>comentarios: {itemPost.text} {itemPost.username} </p>
                        </div>
                    )}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.allPosts,
    selectedPost: state.posts.postId,
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()),

})
 export default connect(mapStateToProps, mapDispatchToProps) (PostDetails);


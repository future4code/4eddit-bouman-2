import React, { Component } from "react";
import PostList from "../PostList";
import { connect } from "react-redux";
import { getPosts } from "../../actions";
import { postCreateComment } from "../../actions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getPostDetail } from "../../actions";



class PostDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: "",

        }
    }

    // componentDidMount(){
    //     this.props.getPosts(this.props.posts)
    // }

    handleInputComments = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    render(){
        const { selectedPost } = this.props;

        return(
            <div>
                Post Details
                    
                    <div>
                        <p>{selectedPost.text}</p>
                        <p>{selectedPost.title}</p>
                        
                    </div>
                    <div>
                        <form>
                            <TextField
                                label="Postar Comentários" name="text" type="text"
                                required value={this.state.text}
                                onChange={this.handleInputComments}>
                            </TextField>
                            <Button onClick={() => this.props.createComment(this.props.selectedPost.id, this.state.text)}>Comentar</Button>
                        </form>
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
    allComments: state.posts.allComments,
})

const mapDispatchToProps = (dispatch) => ({
    createComment: (postId, text) => dispatch(postCreateComment(postId, text)),
    getPostId: (postId)=> dispatch(getPostDetail(postId)),

})
 export default connect(mapStateToProps, mapDispatchToProps) (PostDetails);


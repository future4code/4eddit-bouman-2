import React, { Component } from "react";
import PostList from "../PostList";
import { connect } from "react-redux";
import { getPosts } from "../../actions";
import styled from "styled-components";
import { postCreateComment } from "../../actions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getPostDetail } from "../../actions";




/*Formatação do espaço branco do comentário */
const PostDiv = styled.div`
border: 1px solid #cdcdcc;
padding: 5px;
margin: 10px auto 10px auto;
background-color: white;
max-width: 50%;
border-radius: 6px;
font-family: verdana;
font-size: 11px;
border-left: 3px solid #c46210;
`
/*testes de formatação pro username + comentário*/
const CommentAuthor = styled.p`
margin: 2px 0 0 5px;
color: black;
font-weight: bold;
`
const ItemPost = styled.p`
margin: 2px;
color: black;
`
const CommentContainer = styled.div`
margin: 5px 5px 5px 10px;
border: 1px solid #fee5de;
border-radius: 6px;
background-color:#fee5de; 
` 
const BackgroundDiv = styled.div`
background-color: #fecbbd;
padding: 10px;
`

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

            <BackgroundDiv>
                <PostDiv>                

                        <div>
                            <h2>{selectedPost.title}</h2>
                            <p>{selectedPost.text}</p>
                            
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
                            <CommentContainer>
                                <CommentAuthor>{itemPost.username}</CommentAuthor>
                                <ItemPost>{itemPost.text}</ItemPost>
                            </CommentContainer>
                        )}

                </PostDiv>
            </BackgroundDiv>
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


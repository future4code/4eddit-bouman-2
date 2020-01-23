import React, { Component } from "react";
import PostList from "../PostList";
import { connect } from "react-redux";
import { getPosts } from "../../actions";
import styled from "styled-components";


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

        }
    }

    componentDidMount(){
        this.props.getPosts(this.props.posts)
    }

    render(){
        const { selectedPost } = this.props;

        console.log(this.props.selectedPost.comments)

        return(
            <BackgroundDiv>
                <PostDiv>                
                        <div>
                            <h2>{selectedPost.title}</h2>
                            <p>{selectedPost.text}</p>
                            
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
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()),

})
 export default connect(mapStateToProps, mapDispatchToProps) (PostDetails);


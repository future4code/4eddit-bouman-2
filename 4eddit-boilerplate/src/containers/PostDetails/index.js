import React, { Component } from "react";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import { postCreateComment } from "../../actions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getPostDetail } from "../../actions";
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import { putVoteComment } from "../../actions";



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
const BackDiv = styled.div`
    padding: 20px 0 0 100px;
` 

const DetailsButton = styled.button`
    background-color: white;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 10px 0 5px 0;
    font-size: 15px;
    cursor: pointer;
`
const ButtonDirection = styled.label`
    cursor: pointer;
`;

class PostDetails extends Component {
    constructor(props){
        super(props)
            this.state = {
                text: "",

        }
    }



   handleInputComments = (event) => {
     this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCreateComment = (event) => {
        event.preventDefault(event)
        this.props.createComment(this.props.selectedPostId, this.state.text)
        this.setState({text: "" })
    }

    render(){
        const { selectedPost } = this.props;

        return(

            <BackgroundDiv>
                <BackDiv>
                    <DetailsButton onClick= {this.props.goToPosts} >Voltar</DetailsButton>
                </BackDiv>

                    <PostDiv>                

                        <div>
                            <h2>{selectedPost.title}</h2>
                            <p>{selectedPost.text}</p>
                            
                        </div>
                        <div>
                            <form>
                                <TextField
                                    label="O que você está pensando?" name="text" type="text"
                                    variant="outlined"
                                    rowsMax="4"
                                    required value={this.state.text}
                                    onChange={this.handleInputComments}>
                                </TextField>
                                    <Button onClick={this.handleCreateComment}>Responder</Button>
                            </form>
                        </div>                                             
                        {selectedPost.comments && selectedPost.comments.map((itemPost) =>
                            <CommentContainer>
                                <CommentAuthor>{itemPost.username}</CommentAuthor>
                                <ItemPost>{itemPost.text}</ItemPost>
                                <div>
                                    <ButtonDirection><ArrowUpwardRoundedIcon onClick={ ()=> { this.props.voteComment(selectedPost.id, itemPost.id, 1)}}/></ButtonDirection>
                                        ({itemPost.votesCount})
                                    <ButtonDirection><ArrowDownwardRoundedIcon onClick={ ()=> { this.props.voteComment(this.props.selectedPost.id, itemPost.id, -1)}}/></ButtonDirection>
                                </div>
                            </CommentContainer>
                        )}
                        
                    </PostDiv>

            </BackgroundDiv>
        )
    }
}

const mapStateToProps = state => ({
    selectedPostId: state.posts.selectedPostId,
    selectedPost: state.posts.selectedPost,

})

const mapDispatchToProps = (dispatch) => ({
    createComment: (postId, text) => dispatch(postCreateComment(postId, text)),
    getPostDetailId: (postId)=> dispatch(getPostDetail(postId)),
    goToPosts: () => dispatch(push(routes.postlist)),
    voteComment: (postId, commentId, direction) => dispatch(putVoteComment(postId, commentId, direction))

})
 export default connect(
     mapStateToProps, 
     mapDispatchToProps
     ) (PostDetails);


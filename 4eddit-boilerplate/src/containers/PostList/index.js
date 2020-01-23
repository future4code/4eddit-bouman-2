import React, {Component} from "react";
import { routes } from "../Router";
import { getPosts } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { getPostDetail } from "../../actions";
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import PostCreate from "../PostCreate"


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

`;

const PostContainer = styled.div`
margin: auto;
`

const UserName = styled.p`
border-bottom: 1px solid grey;
margin-top: 2px;
`
const BackgroundDiv = styled.div`
background-color: #fecbbd;
display: flex;
justify-content: center;
`

const DetailsButton = styled.button`
background-color: white;
border: 1px solid grey;
border-radius: 5px;
margin: 10px 0 5px 0;
`

const PostedBy = styled.span`
color: grey;
font-size: 9px;
`

export class PostList extends Component {
    
    
    componentDidMount(dispatch) {
        this.props.getPosts(this.props.id)
    }


    handleIdPostAndGoToPostDetails = (postId) =>{
        this.props.getPostId(postId);
        this.props.goToPostDetails();
    }

    render(){
        
        return(
            <BackgroundDiv>
               
                <PostCreate/>

                <PostContainer>
                    {this.props.posts.map((posts)=>

                        

                        <PostDiv>
                            <UserName><PostedBy>Postado por: </PostedBy>{posts.username}</UserName>
                            {posts.text}  
                            <div>({posts.commentsNumber}) comentários</div> {/* quantidade de comentários vai aqui depois*/}
                            <p><ArrowUpwardRoundedIcon/><ArrowDownwardRoundedIcon/></p>
                            <DetailsButton onClick={() => this.handleIdPostAndGoToPostDetails(posts.id)} >Detalhes do post</DetailsButton>
                        </PostDiv>

                    )}

                </PostContainer>

            </BackgroundDiv>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.allPosts,
    idSelectedPost: state.posts.postId,
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()),
    goToPostDetails: ()=> dispatch(push(routes.postdetails)),
    getPostId: (postId)=> dispatch(getPostDetail(postId)),

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList);
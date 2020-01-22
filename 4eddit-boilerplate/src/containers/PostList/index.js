import React, {Component} from "react";
import { routes } from "../Router";
import { getPosts } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { getPostDetail } from "../../actions";

const CardPost = styled.div `
    border: 1px dotted black;
    max-width: 300px;
    margin-bottom: 20px;
`;




export class PostList extends Component {
    
    
    componentDidMount(dispatch) {
        this.props.getPosts(this.props.id)
    }


    handleIdPostAndGoToPostDetails = (postId) =>{
        this.props.getPostId(postId);
        this.props.goToPostDetails();
    }

    render(){
        const { getPostId } = this.props;
        
        return(
            <div>
               
                <p>Post List</p>

                <div>
                    {this.props.posts.map((posts)=>
                        <CardPost>  
                            <p>{posts.title}</p>
                            <p>{posts.id}</p>
                            <p>postado por: {posts.username}</p>
                            <p onClick={() => this.handleIdPostAndGoToPostDetails(posts.id)}>{posts.text}</p>  
                        </CardPost>
                    )}

                </div>

            </div>
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
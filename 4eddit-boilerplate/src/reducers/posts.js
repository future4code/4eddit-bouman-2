const initialState = {
    allPosts: [],
    postId: "",
    allComments: [],
};

export const posts = ( state = initialState, action ) => {
    switch(action.type){
        case "SET_POSTS":
            return {...state, allPosts: action.payload.posts}
        case  "SET_POSTS_ID":
            return {...state, postId: action.payload.postId}
        case "SET_COMMENTS":
            return {...state, allComments: action.payload.text}
            default:
                return state;
    }
}

export default posts;
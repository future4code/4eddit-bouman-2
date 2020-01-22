const initialState = {
    allPosts: [],
    postId: "",
};

export const posts = ( state = initialState, action ) => {
    switch(action.type){
        case "SET_POSTS":
            return {...state, allPosts: action.payload.posts}
        case  "SET_POSTS_ID":
            return {...state, postId: action.payload.postId}
            default:
                return state;
    }
}

export default posts;
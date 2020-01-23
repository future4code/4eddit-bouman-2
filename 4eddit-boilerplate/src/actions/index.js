import axios from "axios";
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

const postLogin = (login) => ({
    type: 'POST_LOGIN',
    payload: {
        login,
    }
})

const setPosts = (posts) => ({
    type: "SET_POSTS",
    payload: {
        posts,
    }
})

const setCreateUser = (user) => ({
    type: "CREATE_USER",
    payload: {
        user,
    }
})

const setCreatePost = (createpost) => ({
    type: "CREATE_POST",
    payload: {
        createpost,
    }
})

const setPostSelect = (postId) => ({
    type: "SET_POSTS_ID",
    payload: {
        postId
    }
})

const setCreateComment = (createcomment) => ({
    type: "SET_COMMENTS",
    payload: {
        createcomment,
    }
})



export const postLoginUser = (email, password) => async (dispatch) =>{
  
    const newUser = {
        email,
        password,
    }

    try{
      const response = await axios.post(`${baseUrl}/login`, newUser)
            window.localStorage.setItem("token", response.data.token);

        dispatch(postLogin())
            window.alert("Login Realizado com sucessso!!!");
                dispatch(push(routes.postlist))
    }catch(error){
        window.alert("Login ou senha incorreta!!!")
    }

}

export const createUser = (email, password, username) => async (dispatch) =>{


    const data = {
        email,
        password, 
        username
    }

    try {
       const response = await axios.post(`${baseUrl}/signup`, data)
            window.localStorage.setItem("token", response.data.token);
            dispatch(setCreateUser())
                alert('Cadastro realizado com sucesso!')
                    dispatch(push(routes.postlist))
    } catch(error){
        window.alert('Erro no cadastro')
    }

}

export const createPost = ( text, title) => async (dispatch) => {

    const token = localStorage.getItem("token")


    const newPost = {
        text,
        title,
    }
    try {
        await axios.post(`${baseUrl}/posts`, newPost, {
            headers:{
                auth: token,
            }

        })
        dispatch(setCreatePost())
        window.alert("Post criado com sucesso!!!")
    }catch(erro){
        window.alert("Erro")
    }
}


export const getPosts = () => async (dispatch) => {
    
    const token = localStorage.getItem("token")


    try{
    const response = await axios.get(`${baseUrl}/posts`,{
        headers: {
            auth: token,
        }
    })
    dispatch(setPosts(response.data.posts))
    }catch(error){
        window.alert("Erro")

    }

}

export const getPostDetail = (postId) => async (dispatch) =>{

    const token = localStorage.getItem("token")

    try{
        const response = await axios.get(`${baseUrl}/posts/${postId}`, {
            headers: {
                auth: token,
            }
        })
        dispatch(setPostSelect(response.data.post))
        
    }catch(error){
        window.alert("Erro")
    }
}

export const postCreateComment = ( postId, text ) => async (dispatch) =>{
  
    const token = localStorage.getItem("token")

    const newComment = {
        text
    }

    try{
      await axios.post(`${baseUrl}/posts/${postId}/comment`, newComment, {
          headers: {
              auth: token,
          }
      })
          window.alert("Comentario Enviado")  
      dispatch(getPostDetail(postId))
      
    }catch(error){
        window.alert("Erro")
    }

}
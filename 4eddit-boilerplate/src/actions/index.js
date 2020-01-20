import axios from "axios"; 

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"




const postLogin = (login) => ({
    type: 'POST_LOGIN',
    payload: {
        login,
    }
})

export const postLoginUser = (email, password) => async (dispatch) =>{
  
    const newUser = {
        email,
        password,
    }

    try{
        await axios.post(`${baseUrl}/login`, newUser)
        dispatch(postLogin())
        window.alert("Login Realizado com sucessso!!!");
    }catch(error){
        window.alert("Login ou senha incorreta!!!")
    }

}

const setPosts = (posts) => ({
    type: "SET_POSTS",
    payload: {
        posts,
    }
})

export const getPosts = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/posts`)
    

    dispatch(setPosts(response.data.posts))

}
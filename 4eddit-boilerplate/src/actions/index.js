import axios from "axios"; 

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
    }catch(error){
        window.alert("Login ou senha incorreta!!!")
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
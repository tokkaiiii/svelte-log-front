import axios from "axios";

// api 통신을 하는 메소드기 때문에 비동기 통신을 위해 async
const send = async ({method='', path='', data={}, access_token=''} = {}) => {
    const commonUrl = 'http://localhost:3000'
    const url = commonUrl + path

    const headers = {
        "Access-Control-Allow-Origin" : commonUrl,
        "Access-Control-Allow-Credential" : true,
        "content-type" : "application/json;charset=UTF-8",
        "accept" : "application/json",
        "SameSite" : "None",
        "Authorization" : access_token
    }

    const options = {
        method,
        url,
        headers,
        data,
        // 서버와 클라이언트가 다른 도메인이면 true 로 설정해야 서버에서 쿠키를 작성할 수 있다
        withCredentials: true
    }

    try{
        const response = await axios(options)
        return response.data
    }catch (error){
        throw error
    }
}

const getApi = ({path='', access_token=''} = {}) => {
    return send({method:'GET',path,access_token})
}

const putApi = ({path='', data={} ,access_token=''} = {}) => {
    return send({method:'PUT',path, data,access_token})
}

const postApi = ({path='', data={} ,access_token=''} = {}) => {
    return send({method:'POST',path, data,access_token})
}

const delApi = ({path='', data={} ,access_token=''} = {}) => {
    return send({method:'DELETE',path, data,access_token})
}

export {
    getApi,
    putApi,
    postApi,
    delApi
}
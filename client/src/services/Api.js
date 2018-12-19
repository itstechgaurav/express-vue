import axios from 'axios'

let isDev = false;

let url = isDev ? 'http://localhost:1337' : ''

export default (() => {
    return axios.create({
        baseURL: url + '/api'
    })
})()
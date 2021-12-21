import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID k_gN-6Y8O-NynAXs6ooxn-MwnLnY7v3hrqCQ69f-6oo"
      }

});
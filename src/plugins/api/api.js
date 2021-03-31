import axios from 'axios'

export default axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API,
  headers: {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json;charset=UTF-8'
  }
})

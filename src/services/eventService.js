import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Benjamin-ochieng/rwvL3mockdb',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// export default {
//   getEvents() {
//     return apiClient.get('/events')
//   },
//   getEvent(id) {
//     return apiClient.get(`/events/${id}`)
//   }
// }

export const getEvents = () => apiClient.get('/events')

export const getEvent = id => apiClient.get(`/events/${id}`)

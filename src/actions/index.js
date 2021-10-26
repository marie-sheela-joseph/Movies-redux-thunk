import { url } from "../axios"
import axios from "axios"
import { movies } from '../reducers/constants'

export const insertMovies = (ob1) => {
    return (dispatch, getState) => {
        axios.post(url, ob1)
            .then(res => res.data)
            .then(d => dispatch({ type: movies.INSERT_MOVIES, payload: d }))
            .catch(err => console.log(err))
    }
}

export const deleteMovies = (id) => {
    return (dispatch, getState) => {
        axios.delete(url + '/' + id)
            .then(res => res.data)
            .then(d => dispatch({ type: movies.DELETE_MOVIES, payload: id }))
            .catch(err => console.log(err))
    }
}
export const updateMovies = (ob2) => {
    return (dispatch, getState) => {
        axios.patch(url + '/' + ob2.id, ob2)
            .then(res => res.data)
            .then(d => dispatch({ type: movies.UPDATE_MOVIES, payload: d }))
    }
}

export const readMovies = () => {
    return (dispatch, getState) => {
        axios.get(url)
            .then(res => res.data)
            .then(d => dispatch({ type: movies.READ_MOVIES, payload: d }))
            .catch(err => console.log(err))
    }
}

export const filterMovies = (data) => {
    return { type: movies.FILTER_MOVIES, payload: data }
}



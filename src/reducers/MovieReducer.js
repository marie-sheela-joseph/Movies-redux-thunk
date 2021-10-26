const initialState = {
    movies: [],
    filteredMovies: [],
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INSERT_MOVIES': return {
            ...state,
            movies: [...state.movies, action.payload],
            filteredMovies: [...state.movies, action.payload]
        }

        case 'DELETE_MOVIES': return {
            ...state,
            movies: state.movies.filter(item => item.id !== action.payload), filteredMovies: state.movies.filter(item => item.id !== action.payload)
        }

        case 'UPDATE_MOVIES': return {
            ...state,
            movies: state.movies.map(item => item.id === action.payload.id ? action.payload : item),
            filteredMovies: state.movies.map(item => item.id === action.payload.id ? action.payload : item)
        }

        case 'READ_MOVIES': return {
            ...state,
            movies: action.payload, filteredMovies: action.payload
        }

        case 'FILTER_MOVIES': return {
            ...state,
            filteredMovies: action.payload
        }

        default: return state
    }
}
export default MovieReducer
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteMovies, updateMovies, readMovies, filterMovies } from '../actions'

const App = () => {
    let state = useSelector(state => state)
    const dispatch = useDispatch()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        dispatch(readMovies())
        dispatch(filterMovies(state.movieReducer.movies))
    }, [])

    useEffect(() => {
        setCategories([...new Set(state.movieReducer.movies?.map(item => item.category))])
    }, [state.movieReducer.movies])

    const addLikes = (x) => {
        dispatch(updateMovies({ ...x, likes: x.likes + 1, isLiked: true }))
    }

    const addDislikes = (x) => {
        dispatch(updateMovies({ ...x, dislikes: x.dislikes + 1, isLiked: false }))
    }

    const del = (id) => {
        dispatch(deleteMovies(id))
    }

    const selectOptions = (e) => {
        e.preventDefault()
        let ob4 = categories.filter(item => document.getElementById(item).checked)
        dispatch(filterMovies(state.movieReducer.movies.filter(item => ob4.includes(item.category))))
        categories.map(item => document.getElementById(item).checked = false)
    }

    const calculateRatio = (num_1, num_2) => {
        let num
        for (num = num_2; num > 1; num--) {
            if ((num_1 % num) === 0 && (num_2 % num) === 0) {
                num_1 = num_1 / num;
                num_2 = num_2 / num;
            }
        }
        let ratio = num_1 + ":" + num_2;
        return ratio;
    }

    return (
        <section className="movies space">
            <div className="container">

                <form onSubmit={selectOptions} className="select-form">
                    <div className="d-flex justify-center categories-container">
                        {categories.map(item => <div key={item} className="category-flex-item">
                            <input type="checkbox" id={item} name={item} value={item} />
                            <label htmlFor="c1" className="category-label"> {item}</label></div>)}
                    </div>
                    <button className="text-upper btn">submit</button>
                </form>

                <div className="d-grid movies-grid">
                    {state.movieReducer.filteredMovies?.map(item => <div key={item.id} className="movies-grid-item">
                        <div>

                            <div className="movie-image">
                                <img src={item.image} alt={item.title} />
                            </div>

                            <div className="movie-content">
                                <h2>{item.title}</h2>
                                <h4>{item.category}</h4>
                                <div className="likes-dislikes d-flex justify-around">
                                    <span>
                                        {calculateRatio(item.likes, item.dislikes)}
                                    </span>
                                    {
                                        item.isLiked ? <button onClick={e => addDislikes(item)} >< i className="far fa-thumbs-down"></i></button> : <button onClick={e => addLikes(item)} > < i className="far fa-thumbs-up"></i></button>
                                    }
                                </div>
                                <button className="text-upper btn btn-delete" onClick={e => del(item.id)}>delete</button>
                            </div>

                        </div>
                    </div>)}
                </div>
            </div>
        </section >
    )
}
export default App
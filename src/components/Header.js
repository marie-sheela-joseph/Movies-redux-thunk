import React from "react";
import { filterMovies } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <section className="header">
            <div className="relative">
                <div>
                    <img src="./images/movies-banner.jpg" alt="" />
                </div>
                <div className="absolute absolute-content">
                    <div><a href="#"
                        onClick={e => dispatch(filterMovies(state.movieReducer.movies))}
                        className="text-upper text-decoration-none all-movies">
                        movies
                    </a>
                    </div>
                    <div className="d-flex justify-center items-center tagline">
                        <div>
                            <h1>Unlimited movies!</h1>
                            <h3>Watch anywhere</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header
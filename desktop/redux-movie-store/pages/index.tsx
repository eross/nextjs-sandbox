
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {createStore} from 'redux';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const initialState = {
  movies: [],
  basket: [],
  likedMovies: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload]
      };
    case 'ADD_TO_LIKED_MOVIES':
      return {
        ...state,
        likedMovies: [...state.likedMovies, action.payload]
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;

export default function Home() {
  return (
    <>

    </>
  );
}


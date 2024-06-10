import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../common/Apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const response = await getMovies("fast");
    console.log(response)
    return response.data;

})

interface moviesState {
    movies: any;
}
const initialState: moviesState = {
    movies: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        // ['fetchAsyncMovies.pending']: () => {
        //     console.log('Pending')
        // },
        // ['fetchAsyncMovies.fulfilled']: (state, [payload]) => {
        //     console.log('fetched sucessfully')
        //     return { ...state, movies: payload }
        // },
        // ['fetchAsyncMovies.rejected']: () => {
        //     console.log('Rejected')
        // }
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: moviesState) => state.movies.movies;
export default movieSlice.reducer;
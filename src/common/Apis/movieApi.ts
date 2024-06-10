import axiosInstance from "../../axios.service"


export const getMovies = (movieText: string) => {
    console.log('hitt')
    const response = axiosInstance.get(`?apiKey=${import.meta.env.VITE_API_KEY}&s=${movieText}&type=movie`)
    return response;
}
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authentication: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmQ3ZGM3ZjJmZDVjYmVkZDJjZTBmNjJiMDhiNzAzZCIsInN1YiI6IjY1MDk4ZTBhOGE4OGIyMDEzY2ZiNDMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OfE78Luukyep5fcpuf3MhHWhr6t_dBKS0AwWUPk1Hps`,
  },
});

import axios from "axios";

//base url to make requests to the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

/*
Explanation:

instance.get('/foo-bar');
   what we get is 

https://api.themoviewdb.org/3/foo-bar


*/

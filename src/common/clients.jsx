import axios from 'axios';

const AllMovies = axios.create({    
    baseURL: "http://localhost:3004/posts",
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }
});

const clients = {
    AllMovies: AllMovies    
}

export default clients;
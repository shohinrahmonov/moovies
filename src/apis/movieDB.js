import axios from 'axios';
export const API_KEY = process.env.API_KEY || '41c16748bc726c6ffb1ad71aaaf7aa49';

export default axios.create({
        baseURL: `https://api.themoviedb.org`
    })

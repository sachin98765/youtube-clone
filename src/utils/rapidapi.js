import axios from 'axios';

const API_KEY= import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData = async (url) =>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    }catch(error){
        console.error('Error fetching api data:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}
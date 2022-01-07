import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'
// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '410f4af2a5msh458dcf8cd18e471p114534jsnd27d7a436f17'
//   }

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '410f4af2a5msh458dcf8cd18e471p114534jsnd27d7a436f17'
          }
    });

    return data;
}
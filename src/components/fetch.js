const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': '0a4c9c3ad2msh9b36b24357f5bbcp1b00c5jsn61d78be2afff',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
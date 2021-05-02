import axios from 'axios';

// const BASE_URL = 'http://localhost:4454';
const BASE_URL = 'https://dyrpit-servers-api.herokuapp.com';

export default axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

import axios from 'axios';
export const baseURL = 'https://ferrari219.github.io/lvtlinking/data/';

const Api = axios.create({
	baseURL: baseURL,
});

export default Api;

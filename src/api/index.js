import axios from 'axios';
export const baseURL = 'https://ferrari219.github.io/lvtlinking/data/';

const Api = axios.create({
	baseURL: baseURL,
});

export const bannerApi = {
	mainswiper: () => Api.get('banner/mainswiper.json'),
};
export const classApi = {
	bestclass: () => Api.get('class/bestclass.json'),
	newclass: () => Api.get('class/newclass.json'),
};

export default Api;

import { name, baseurl } from '../sveltin.json';
import type { Sveltin } from '../src/sveltin';

const website: Sveltin.WebSite = {
	name: name,
	baseURL: baseurl,
	language: 'en-GB',
	title: name,
	description: 'My Welcome Page',
	favicon: 'favicon.png',
	logo: 'logo.png',
	copyright: '2021 - present'.concat(' : ', name),
	keywords: [],
	contactEmail: 'hi@mircoveltri.me',
	socials: {
		linkedin: 'https://it.linkedin.com/in/mircoveltri',
		twitter: 'https://twitter.com/mircoveltri',
		github: 'https://github.com/indaco'
	},
	creator: {
		name: 'indaco',
		address: 'Milan (Italy)',
		email: 'hi@mircoveltri.me'
	}
};

export { website };

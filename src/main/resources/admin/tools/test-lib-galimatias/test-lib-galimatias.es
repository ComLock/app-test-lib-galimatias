import {URL} from '/lib/galimatias';

export function get() {
	const url = new URL('https://www.example.com/path?param=value');
	return {
		body: {
			url
		},
		contentType: 'application/json; charset=utf-8'
	}; // return
}

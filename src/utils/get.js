import Request from 'request';

import session from './session.js';

export default function get(url)
{
	return (new Promise(function(resolve) {
		Request.get({
			url: url,
			json: true,
			jar: session,
		}, function(error, response, body) {
			if(error)
			{
				process.exit();
			}
			else
			{
				return resolve(body);
			}
		});
	}));
}

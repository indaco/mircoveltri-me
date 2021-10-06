import version from '$config/defaults';
export function get(): Object {
	return {
		body: {
			version
		}
	};
}

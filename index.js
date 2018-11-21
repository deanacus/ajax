class Ajax {

	/**
     * A simple API to make a request for data from an endpoint. Returns a
     * promise that resolves with the response text
     *
     * @param {string} endpoint The URL to which the request will be made
     * @param {object} headers Any custom headers that are required to be sent
     * with the request
     *
     * @returns Promise
     */
	static get( endpoint, headers = {} ) {
		return new Promise( ( resolve, reject ) => {
			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if ( 4 === xhr.readyState ) {
					if ( 200 <= xhr.status && 300 > xhr.status ) {
						resolve( xhr.response );
					}
					else {
						reject( xhr.status );
					}
				}
			};

			if ( headers ) {
				Object.keys( headers ).forEach( function( header ) {
					xhr.setRequestHeader( header, headers[ header ] );
				} );
			}

			xhr.open( 'GET', endpoint );

			xhr.send( null );
		} );
	}

	/**
     * A simple API to send data to an endpoint. Returns a promise that resolves
     * with the response text
     *
     * @param {string} endpoint The URL to which the request will be made
     * @param {any} payload The data to be sent as a part of the request. Sent
     * raw, so manipulate it any way it needs to be manipulated before you send
     * @param {object} headers Any custom headers that are required to be sent
     * with the request
     */
	static post( endpoint, payload, headers = {} ) {
		return new Promise( ( resolve, reject ) => {
			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if ( 4 === xhr.readyState ) {
					if ( 200 <= xhr.status && 300 > xhr.status ) {
						resolve( xhr.response );
					}
					else {
						reject( xhr.status );
					}
				}
			};

			if ( headers ) {
				Object.keys( headers ).forEach( function( header ) {
					xhr.setRequestHeader( header, headers[ header ] );
				} );
			}

			xhr.open( 'POST', endpoint );

			xhr.send( payload );
		} );
	}
}

export default Ajax;


const showsEndpoint = showId => `shows/${showId}.json`
const getJSON = response => response.json()

/*
 * This fetches from a pseudo API (JSON file located in /static).
 * I've made the assumption that this call will only be made in 
 *   a) a browser (rather than also on the server)
 *   b) evergreen browsers that support fetch
 */
export const getShowById = showId => fetch(showsEndpoint(showId)).then(getJSON)

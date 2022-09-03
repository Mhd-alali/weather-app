const Baseurl = "http://dataservice.accuweather.com/";

const autoCompleteEndPoint = "locations/v1/cities/autocomplete";

const forcastsEndPoint = "forecasts/v1/daily/5day/";

/**
 * returns an array of cities based on the query
 * @param {string} query the query 
 * @returns {Array} an array of cities
 */
export async function getCities(query) {
    const url = new URL(Baseurl + autoCompleteEndPoint);
    url.searchParams.append("apikey", import.meta.env.VITE_API_KEY);
    url.searchParams.append("q", query);
    try {
        const response = await fetch(url)
        if (response.ok) {
            const json = await response.json()
            return json
        } else {
            throw new Error("the request faild")
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * return the current condition of the specified city id
 * @param {string} cityId the city id
 * @returns {object} an object that holds all the information about the city weather
 */
export async function getCurrentCondition(cityId) {
    const url = new URL(Baseurl + forcastsEndPoint + cityId)
    url.searchParams.append("apikey", import.meta.env.VITE_API_KEY);
    try {
        const response = await fetch(url)
        if (response.ok) {
            const json = await response.json()
            return json;
        } else {
            throw new Error("the request faild")
        }
    } catch (error) {
        console.log(error);
    }
}
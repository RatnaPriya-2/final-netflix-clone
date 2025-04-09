const axios = require("axios");

exports.handler = async (event) => {
  const key = process.env.REACT_APP_TMDB_KEY;
  try {
    const { endpoint, params } = event.queryStringParameters;
    console.log("Received all params:", params);

    if (!endpoint) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Endpoint is required" }),
      };
    }

    // Construct additional params if provided
    const additionalParams = params ? `${params}` : "";

    
    let url = `https://api.themoviedb.org/3/${endpoint}?api_key=${key}&${additionalParams}`;
    console.log("url:", url);

    // Fetch data from TMDB API
    let response = await axios.get(url);

    // If no results are returned, try with page 1
    if (!response.data.results || response.data.results.length === 0) {
      console.log(
        `No results found for page ${randomPage}. Falling back to page 1.`
      );
      url = `https://api.themoviedb.org/3/${endpoint}?language=en-US&page=1&api_key=${key}${additionalParams}`;
      response = await axios.get(url);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching data from TMDB:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch movies" }),
    };
  }
};

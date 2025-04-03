const axios = require("axios");

exports.handler = async (event) => {
  const key = process.env.REACT_APP_TMDB_KEY;
  try {
    const { endpoint } = event.queryStringParameters;

    if (!endpoint) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Endpoint is required" }),
      };
    }

    // Fixing the URL construction
    const url = `https://api.themoviedb.org/3/${endpoint}?language=en-US&page=1&api_key=${key}`;

    // Fetch data from TMDB API
    const response = await axios.get(url);

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

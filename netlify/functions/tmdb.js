const axios = require("axios");

exports.handler = async (event) => {
  const category = event.queryStringParameters.category || "now_playing";
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        headers: {
          Authorization: process.env.TMDB_KEY,
        },
      }
    );

    console.log("TMDB Response Data: ", data); // Add this line to log the response

    return {
      statusCode: 200,
      body: JSON.stringify(data.results), // This should return the movies
    };
  } catch (error) {
    console.error("Error fetching data from TMDB: ", error); // Log the error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch movies" }),
    };
  }
};

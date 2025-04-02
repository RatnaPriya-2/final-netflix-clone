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
    return {
      statusCode: 200,
      body: JSON.stringify(data.results),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch movies" }),
    };
  }
};

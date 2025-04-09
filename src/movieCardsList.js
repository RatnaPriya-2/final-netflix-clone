const movieCardsList = [
  {
    title: "Now Playing",
    endpoint: "movie/now_playing",
    params: "",
  },
  {
    title: "Popular Movies",
    endpoint: "movie/popular",
    params: "",
  },
  {
    title: "Top Rated Movies",
    endpoint: "movie/top_rated",
    params: "",
  },
  {
    title: "Upcoming Movies",
    endpoint: "movie/upcoming",
    params: "",
  },
  {
    title: "Trending Movies Today",
    endpoint: "trending/movie/day",
    params: "",
  },
  {
    title: "Trending Movies This Week",
    endpoint: "trending/movie/week",
    params: "",
  },
  {
    title: "Critically Acclaimed",
    endpoint: "discover/movie",
    params:
      "language=en-US&sort_by=vote_average.desc&vote_count.gte=1000&page=12",
  },
  {
    title: "Action Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=28&page=12",
  },
  {
    title: "Comedy Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=35&page=12",
  },
  {
    title: "Drama Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=18&page=12",
  },
  {
    title: "Horror Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=27&page=12",
  },
  {
    title: "Romance Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=10749&page=12",
  },
  {
    title: "Science Fiction Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=878&page=12",
  },
  {
    title: "Fantasy Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=14&page=12",
  },
  {
    title: "Family Movies",
    endpoint: "discover/movie",
    params: "language=en-US&with_genres=10751&page=12",
  },
];
export default movieCardsList;

const tvShowCategories = [
  {
    title: "Trending Now",
    endpoint: "trending/tv/week",
    params: "language=en-US",
  },
  {
    title: "Popular on Netflix",
    endpoint: "discover/tv",
    params: "with_networks=213&sort_by=popularity.desc&language=en-US",
  },
  {
    title: "Top Rated",
    endpoint: "tv/top_rated",
    params: "language=en-US",
  },
  {
    title: "New Releases",
    endpoint: "tv/on_the_air",
    params: "language=en-US",
  },
  {
    title: "Action & Adventure Shows",
    endpoint: "discover/tv",
    params:
      "with_genres=10759&with_networks=213&sort_by=popularity.desc&language=en-US",
  },
  {
    title: "Comedy Shows",
    endpoint: "discover/tv",
    params:
      "with_genres=35&with_networks=213&sort_by=popularity.desc&language=en-US",
  },
  {
    title: "Drama Shows",
    endpoint: "discover/tv",
    params:
      "with_genres=18&with_networks=213&sort_by=popularity.desc&language=en-US",
  },
  {
    title: "Documentaries",
    endpoint: "discover/tv",
    params:
      "with_genres=99&with_networks=213&sort_by=popularity.desc&language=en-US",
  },
  {
    title: "Reality Shows",
    endpoint: "discover/tv",
    params:
      "with_genres=10764&with_networks=213&sort_by=popularity.desc&language=en-US",
  },
  {
    title: "Sci-Fi & Fantasy",
    endpoint: "discover/tv",
    params:
      "with_genres=10765&with_networks=213&sort_by=popularity.desc&language=en-US",
  },
];

export default tvShowCategories;

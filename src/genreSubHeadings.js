const genreSubheadings = [
  {
    title: "Popular on Netflix",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&sort_by=popularity.desc",
  },
  {
    title: "New Releases",
    endpoint: "discover/movie",
    params:
      "with_genres=GENRE_ID&primary_release_date.gte=2024-12-01&sort_by=release_date.desc",
  },
  {
    title: "Trending Now",
    endpoint: "trending/movie/week",
    params: "",
  },
  {
    title: "Top 10 in Your Country Today",
    endpoint: "discover/movie",
    params: "region=COUNTRY_CODE&sort_by=popularity.desc&page=1",
  },
  {
    title: "Critically Acclaimed Movies",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&sort_by=vote_average.desc&vote_count.gte=500",
  },
  {
    title: "Award-Winning Movies",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID", // Oscar, Cannes etc.
    note: "Use keyword IDs like Oscar, Cannes",
  },
  {
    title: "Because You Watched [Movie]",
    endpoint: "movie/MOVIE_ID/recommendations",
    params: "",
  },
  {
    title: "Hidden Gems",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&vote_average.gte=7&vote_count.lte=200",
  },
  {
    title: "Strong Female Lead",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'strong female protagonist'",
  },
  {
    title: "Based on True Stories",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'true story'",
  },
  {
    title: "Feel-Good Picks",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'feel-good'",
  },
  {
    title: "Dark Thrillers",
    endpoint: "discover/movie",
    params: "with_genres=53,GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'dark'",
  },
  {
    title: "Family-Friendly Movies",
    endpoint: "discover/movie",
    params:
      "with_genres=GENRE_ID&certification_country=US&certification.lte=PG",
  },
  {
    title: "Classic Films",
    endpoint: "discover/movie",
    params:
      "with_genres=GENRE_ID&primary_release_date.lte=1990-01-01&sort_by=vote_average.desc",
  },
  {
    title: "Edge-of-Your-Seat Thrillers",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'suspense'",
  },
  {
    title: "Binge-Worthy TV Shows",
    endpoint: "discover/tv",
    params: "with_genres=GENRE_ID&sort_by=popularity.desc",
  },
  {
    title: "Movies from Around the World",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_original_language=LANG_CODE",
  },
  {
    title: "Fast-Paced Genre",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'fast-paced'",
  },
  {
    title: "Emotional Dramas",
    endpoint: "discover/movie",
    params: "with_genres=18&with_keywords=KEYWORD_ID",
    note: "Keyword like 'emotional'",
  },
  {
    title: "Romantic Comedies",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID",
  },
  {
    title: "Supernatural Titles",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'supernatural'",
  },
  {
    title: "Cult Favorites",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&with_keywords=KEYWORD_ID",
    note: "Keyword like 'cult'",
  },
  {
    title: "Understated Films",
    endpoint: "discover/movie",
    params: "with_genres=GENRE_ID&vote_average.gte=7&vote_count.lte=300",
  },
];

export default genreSubheadings;

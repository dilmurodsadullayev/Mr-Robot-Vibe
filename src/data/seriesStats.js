const seriesStats = {
  title: "MR. ROBOT",

  years: "2015 — 2019",

  seasonsCount: 4,

  episodesCount: 45,

  ratings: {
    imdb: {
      score: 8.5,
      max: 10,
      label: "IMDb",
    },

    rottenTomatoes: {
      critics: 94,
      audience: 93,
      label: "Rotten Tomatoes",
    },

    metacritic: {
      critics: 80,
      users: 8.6,
      label: "Metacritic",
    },
  },

  seasons: [
    {
      id: "S1",
      year: 2015,
      episodesCount: 10,

      episodes: [
        9.2,
        8.4,
        8.0,
        7.9,
        8.4,
        9.1,
        8.4,
        9.4,
        9.2,
        8.7,
      ],
    },

    {
      id: "S2",
      year: 2016,
      episodesCount: 12,

      episodes: [
        8.1,
        8.1,
        8.3,
        8.2,
        8.8,
        9.0,
        9.2,
        8.5,
        8.5,
        9.2,
        8.4,
        8.8,
      ],
    },

    {
      id: "S3",
      year: 2017,
      episodesCount: 10,

      episodes: [
        8.7,
        9.1,
        8.7,
        8.2,
        9.7,
        9.7,
        9.0,
        9.2,
        8.6,
        9.6,
      ],
    },

    {
      id: "S4",
      year: 2019,
      episodesCount: 13,

      episodes: [
        9.3,
        8.7,
        8.7,
        8.8,
        9.7,
        9.1,
        9.9,
        9.3,
        9.7,
        8.1,
        9.4,
        9.5,
        9.8,
      ],
    },
  ],
};

export default seriesStats;
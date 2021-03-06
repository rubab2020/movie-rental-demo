const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471817", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5
    // publishDate: "2019-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471817", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5
    // publishDate: "2019-01-03T19:04:28.809Z"
  }
];

export function getMovies() {
  return movies;
}

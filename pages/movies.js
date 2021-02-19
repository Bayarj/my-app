import { connectToDatabase } from "../util/mongodb";

export default function Top({ movies }) {
  return (
    <div>
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
        <a href="/">
          <img src="/logo192.png" alt="Bayarjargal" className="h-12"/>         
          </a>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.name}>
            <h2>{movie.name}</h2>
            {/* <h3>{movie.metacritic}</h3>
            <p>{movie.plot}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
import { connectToDatabase } from "../util/mongodb";
import products from "./api/products";

export default function Top({ movies }) {
  return (
    <div>
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {products.map((products) => (
          <li>
            <h2>{products.name}</h2>
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

  const products = await db
    .collection("tae")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
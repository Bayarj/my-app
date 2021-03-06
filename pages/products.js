import { connectToDatabase } from "../util/mongodb";

export default function Top({ products }) {
  return (
    <div>
      <h1>Бараанууд</h1>
      <p>
        <small>(Бараануудын жагсаалт)</small>
        <a href="/">
          <img src="/logo192.png" alt="Bayarjargal" className="h-12"/>         
          </a>
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <h2>{product.name}</h2>
            <h3>{product.code}</h3>
            <p>{product.hairtsagDahiToo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const products = await db
    .collection("products")
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
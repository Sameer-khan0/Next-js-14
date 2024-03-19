import UserPage from "./users/page";
import Header from "../components/Header";

export default async function Home() {
  return (
    <div>
      <Header />
      <UserPage />
      {/* <li>
        {res.map((e) => (
          <div key={e._id}>
            <h2>{e.name}</h2>
            <img src={e.img} alt="image" />
          </div>
        ))}
      </li> */}
    </div>
  );
}

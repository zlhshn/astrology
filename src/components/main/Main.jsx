import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <main>
      <header>
        <h1>WHO ARE YOU?</h1>
      </header>
      <div className="card-container">
        {data.map((item) => (
          <Card key={data.id} {...item} />
        ))}
      </div>
    </main>
  );
};

export default Main;

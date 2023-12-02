import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <main>
      {data.map((item) => (
        <Card key={data.id} {...item} />
      ))}
    </main>
  );
};

export default Main;

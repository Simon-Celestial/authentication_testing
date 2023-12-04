import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getData } from "../../../services/product";

export default function Home() {
  const [data, setData] = useState([]);
  const getProducts = () => {
    getData()
      .then((res) => {
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}

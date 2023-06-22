import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./category.css";

function Category() {
  const [data, setData] = React.useState([]);
  const [searchdata, setSearchdata] = useSearchParams();

  const typefilter = searchdata.get("category");
  const kalabala = typefilter
    ? data.filter(
        (char) => char.category.toLowerCase() === typefilter.toLowerCase()
      )
    : data;

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  const kala = kalabala.map((item) => (
    <Link
      to={`/category/${item.id}`}
      state={{ search: `?${searchdata.toString()}` }}
    >
      <div key={item.id}>
        <img src={item.image} width={"100px"} />
        <h5>{item.title}</h5>
        <p>Price - ${item.price}</p>
      </div>
    </Link>
  ));
  function searchproduct(key, value) {
    const sp = new URLSearchParams(searchdata);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  return (
    <div className="outer">
      <Link to={searchproduct("category", "Electronics")}>Electronics</Link>
      <Link to={searchproduct("category", "Jewelery")}>Jewelery</Link>
      <Link to={searchproduct("category", "Men's clothing")}>
        Men's clothing
      </Link>
      <Link to={searchproduct("category", "Women's clothing")}>
        Women's clothing
      </Link>
      <Link to={searchproduct("category", null)}>All</Link>
      <div className="inner">{kala}</div>
    </div>
  );
}

export default Category;

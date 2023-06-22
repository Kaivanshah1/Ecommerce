import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function Categorydetails() {
  const location = useLocation();
  const params = useParams();
  const [van, setVan] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setVan(json));
  }, [params.id]);
  const catt = location.state?.search || "";
  return (
    <div>
      <Link to={`..${catt}`} relative="path">
        Back to {catt}
      </Link>
      {van ? (
        <div>
          <img src={van.image} height={"300px"} />
          <br />
          <br />
          <h5>{van.title}</h5>
          <br />
          <br />
          <h5>${van.price}</h5>
          <br />
          <h5>{van.description}</h5>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

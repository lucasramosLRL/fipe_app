import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setData(data);
          console.log(data);
        },(error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if(!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {data.map( marca => (
          <li key={marca.codigo}>
            <Link to={`/modelos/${marca.codigo}`}>{marca.nome}</Link>
          </li>
        ))}
      </ul>
    )
  }

  /*return (
    <h1>Home page</h1>
  )*/
}

export default Home;
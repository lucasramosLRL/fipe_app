import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

const Models = props => {
  let { id } = useParams(props, 'id');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setModels(data.modelos);
        },(error) => {
          setIsLoaded(true);
          setError(error);
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
        {
          models.map(model => (
            <li key={model.codigo}>
              <Link to={`/years/${model.codigo}`}>{model.nome}</Link>
            </li>
          ))}
        
      </ul>
    )
  }
}

export default Models;
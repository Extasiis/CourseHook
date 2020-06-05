import React, { Fragment, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
const Effect = () => {
  const [pueblo, setPueblo] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
    );
    const users = await data.json();
    setPueblo(users.civilizations );
  };

  return (
    <Fragment>
        <h2>Civilizacion</h2>
      <ul>
          {
              pueblo.map(item => (
              <li key={item.id}>
                  <Link to={`/effect/${item.id}`}>{item.name} - {item.expansion}</Link>
              </li>
              ))
          }
      </ul>
    </Fragment>
  );
};

export default Effect;

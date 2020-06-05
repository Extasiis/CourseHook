import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
   // console.log(useParams())
   const {id} = useParams();
   // console.log(id)

   const [city, setCity] = useState({})

   useEffect(() => {
    const fetchData = async () => {
        const data = await fetch(
          `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
        );
        const users = await data.json()
        setCity(users)
      }
       fetchData()
   }, [id])

  

  return (
    <Fragment>
      <h3>{city.name}</h3>
      <h3>{city.civilization_bonus}</h3>
    </Fragment>
  );
};

export default User;

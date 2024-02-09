import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const RoomPage = () => {
//   const {
//     data: rooms,
//     loading,
//     error,
//   } = useFetch(
//     "http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city"
//   );
//   console.log(rooms);
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  return (
    <div>
      <h2>Rooms Available:</h2>
      {/* <ul>
        {data.rooms.map((item) => (
          <li key={item.room_id}>
            <h3>{item.title}</h3>
            <p>Description: {item.description}</p>
            <p>Number of Persons: {item.num_persons}</p>
            <p>Area: {item.area}</p>
            <p>Day Price (Normal): {item.day_price_normal}</p>
            <p>Day Price (Flex): {item.day_price_flex}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

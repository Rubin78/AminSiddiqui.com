import React, { useState, useEffect } from "react";
import axios from "axios";

export default function First() {
  const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);


useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [input])


  
  console.log(data);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            {item.name} - {item.phone}
          </div>
        ))}
      {/* {data[0] && <div>{JSON.stringify(data)}</div>} */}
    </div>
  );
}

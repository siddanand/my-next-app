import { useState, useEffect } from "react";
function ClientSide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Always do navigations after the first render
    async function fetchMyAPI() {
      let response = await fetch(
        "https://api.github.com/users/siddanand/repos"
      );
      response = await response.json();
      console.log(response);
      setData(response);
    }
    fetchMyAPI();
  }, []);
  console.log(data);
  return (
    <div>
      CLIENT SIDE RENDERED DATA :
      {data.map((item) => {
        return <p key={item.id}>{item.id}</p>;
      })}
    </div>
  );
}

export default ClientSide;

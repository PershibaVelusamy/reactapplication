import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0942136211msh156f483d4f452d5p1a2e3djsnb1c705fc1c84',
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
        }
    };

    fetch(url, options)
      .then((res) => res.json() )
      .then((data) =>{
        console.log(data,"data")
        setData(data)});
  }, [url]);

  return [data];
};

export default useFetch;
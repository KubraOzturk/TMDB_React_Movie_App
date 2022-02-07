import React from 'react';
import { useState, useEffect } from 'react';
import Discover from './Discover';
import Trending from './Trending/Trending';
import LoginPage from './LoginPage';
import SearchBox from './SearchBox/SearchBox';
//import SearchBox from './SearchBox/SearchBox';
function Home(props) {
  const [query, setQuery] = useState("");
  const [data,setData]=useState();
  const search_URL=`https://api.themoviedb.org/3/search/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&query=${query}&page=1&include_adult=false`;
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(search_URL)
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      // setLoading(false);
    });
    console.log("search data result",data)
  }

  function handleChange(e) {
    setQuery(e.target.value);
    console.log("query",query);
  }

  return (<>
    <SearchBox/>
    
    <Discover />
    
    <div className="b-example-divider my-5"></div>
    <Trending />
  </>)
}

export default Home;

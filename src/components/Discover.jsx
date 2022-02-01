import React from 'react';
import {useState,useEffect} from "react";
import { Discover_URL ,img_url} from '../api';
import Card from './Card';
import sliderSettings from "./Slider";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import DetailPage from './DetailPage/DetailPage';
//import StyledLink from "./StyledLink";

function Discover(props) {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL =Discover_URL ;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // setLoading(false);
      });
  }, []);
  
  console.log("data",data.results);
  const id = 35;
  return (
    <>
      <h1>Discover</h1>
      
      <div className="row ">
      <Slider {...sliderSettings}>
      {
        
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2">
          <Link to={`/detail/${item.id} `} style={{ color: 'black' }}><Card img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} id={item.id}/></Link>
         {console.log(img_url+item.poster_path)}
         
        </div>
         
        ))
      }
     </Slider>
      </div>
     
      {/* <div className="row">
        <div className="col-sm-4 mb-2">
          <Card imgId={id} />
        </div>
        <div className="col-sm-4 mb-2">
          <Card imgId={id+10} />
        </div>
        <div className="col-sm-4 mb-2">
          <Card imgId={id+23} />
        </div>
      </div> */}
    </>
  );
}

export default Discover;

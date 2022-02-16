import React from 'react';
import {useState,useEffect} from "react";
import { Discover_URL ,img_url} from '../api';
import Card from './Card';
import sliderSettings from "./Slider";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import ButtonCard from './IconButtons/ButtonCard';

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
  return (
    <>
      <h1 className='offset-1'>Discover</h1>
      
      <div className="container-fluid row ">
      <Slider {...sliderSettings}>
      {
        
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2">
            <ButtonCard/>
          <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}><Card img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} id={item.id}/></Link>
         {console.log(img_url+item.poster_path)}
         
        </div>
         
        ))
      }
     </Slider>
      </div>
     
    </>
  );
}

export default Discover;

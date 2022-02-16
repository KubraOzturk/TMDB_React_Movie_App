import React from 'react';
import Card from '../Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect, useState } from 'react';
import { img_url} from '../../api';
import Slider from "react-slick";
import sliderSettings from '../Slider';
import {Link} from "react-router-dom";
import ButtonCard from '../IconButtons/ButtonCard';


function Trending(props) {
  const [timeData,setTimeData]=useState("day");
  const [data,setData]=useState([]);

 const trending_url=`https://api.themoviedb.org/3/trending/movie/${timeData}?api_key=14ccdb96456935bbb41591e99697d262`;
  useEffect(() => {
    fetch(trending_url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [timeData]);

  
  
  function handleDayButton() {
    setTimeData("day");
    console.log(trending_url);
  }

  function handleWeekButton() {
    setTimeData("week");
    console.log(trending_url);
  }

  return (
    <> <div>
      <h1 className='offset-1 mb-2'>Trending
        <Box
          sx={{
            display: 'inline',
            flexDirection: 'column',
            alignItems: 'start',
            '& > *': {
              m: 1,
              mb: 2,
            },
          }}
        >
          <ButtonGroup size="medium" aria-label="medium button group" className='offset-1'>
            <Button key="today" onClick={handleDayButton}>Today</Button>
            <Button key="lastweek" onClick={handleWeekButton}>Last Week</Button>
          </ButtonGroup>
        </Box>
      </h1>
      </div>
      <div className="container-fluid row">
      <Slider {...sliderSettings}>
        { 
          data?.results?.map((item, index) => (
            //console.log("dayItem", item),
            <div key={index} className="col-sm-4 mb-2">
              <ButtonCard/>
              <Link to={`/detail/${item.id} `} style={{ color:'#323232',textDecoration: 'none'}}>
              <Card img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} className='offset-1'/>
              {console.log(img_url + item.poster_path)}
              </Link>
            </div>
          ))
        }
        </Slider>
      </div>
    </>
  );
}

export default Trending;



 // function handleDayButton() {
  //   setButtonData(true);
  //   return <DayTrending/>
  // }

  // function handleWeekButton() {
  //   setButtonData(false);
  //   return <WeekTrending/>
  // }

import React, { useEffect,useState } from 'react';
//import FilterPage from './SortFilter/FilterPage';
import SortFilter from './SortFilter/SortFilter';
import {fetchTopRatedMovies,img_url} from "../api";
import Card from './Card';
import sliderSettings from "./Slider";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import ButtonCard from './IconButtons/ButtonCard';
import FilterPage from './SortFilter/FilterPage';
import topratedSliderSettings from './TopratedSliderSettings';

function TopRated(props) {
  const [page, setPage] = useState(1);
  const [data,setData]=useState();


  useEffect(()=>{
    fetchTopRatedMovies(page).then((response)=>{
      console.log(response),
      setData(response.data);
    });
  },[])

  // useEffect(() => {
  //   fetchGenres().then((response) => {
  //     setGenres(response.data.genres);
  //   });
  //   //getPopularData();
  // }, []);

  return (<>
  <h1>TopRated</h1>
  <div className="row ">
    <div className='col-sm-8'>
      <Slider {...topratedSliderSettings}>
      {
        
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2">
          <ButtonCard/>
          <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}>
            <Card img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} id={item.id}/>
          </Link>
         {console.log(img_url+item.poster_path)}
         
        </div>
         
        ))
      }
     </Slider>
     </div>
     <div className="col-sm-4"><FilterPage/></div>
      </div>
      
  {/* <SortFilter/> */}
  </>);
}

export default TopRated;

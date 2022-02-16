import React, { useEffect,useState } from 'react';
//import FilterPage from './SortFilter/FilterPage';
import SortFilter from './SortFilter/SortFilter';
import {fetchTopRatedMovies,img_url,API_KEY,BASE_API} from "../api";
import Card from './Card';
import sliderSettings from "./Slider";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import ButtonCard from './IconButtons/ButtonCard';
import FilterPage from './SortFilter/FilterPage';
import topratedSliderSettings from './TopratedSliderSettings';
import { Button } from '@mui/material';
import styled from 'styled-components';

function MovieCat(props) {
  const [page, setPage] = useState(1);
  const [data,setData]=useState([]);
  const [filteredData,setFilteredData]=useState(data);
  const [genreId,setGenreId]=useState();

 

  useEffect(()=>{
    fetchTopRatedMovies(page).then((response)=>{
      console.log(response),
      setData(response.data);
      setFilteredData(data);
    });
  },[]);

  useEffect(()=>{
    fetchTopRatedMovies(page).then((response)=>{
      console.log(response),
      setData(...data,response.data);
    });
  },[page])

  useEffect(() => {
    fetchGenres().then((response) => {
      setGenreId(response.data.genres);
    });
    //getPopularData();
  }, []);

  return (<>
  <h1 className='offset-1'>Top Rated Movies</h1>
  <div className="container-fluid row ">
  <div className="col-sm-4"><FilterPage/></div>
    <div className='col-sm-8'>
      {/* <Slider {...topratedSliderSettings}> */}
      <div className="container d-flex flex-wrap">
      {
        
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2 ">
          <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}>
            <ButtonCard/>
            <Card img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} id={item.id}/>
          </Link>
         {console.log(img_url+item.poster_path)}
         
        </div>
         
        ))
      }
      </div>
      <LoadButton className='allign-item-center' onClick={()=>setPage(page+1)}>Load More</LoadButton>
     {/* </Slider> */}
     </div>
     
    </div>
      
  {/* <SortFilter/> */}
  </>);
}

export default <MovieCat></MovieCat>;

 const LoadButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #ff5e57;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
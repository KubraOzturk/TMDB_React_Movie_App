import React, { useState, useEffect } from 'react';
import { detail_url, img_url } from '../../api';
import CastCard from './CastCard';
import { fetchSingleMovie, fetchSingleMovieCredits, fetchReviews, fetchRecommendations } from "../../api";
import { Description } from '@mui/icons-material';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import { Card } from '@mui/material';

function DetailPage(props) {

  // const [movieData,setMovieData]=useState([]);
  //const detail_url= `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=14ccdb96456935bbb41591e99697d262`
  const { movieId } = useParams();
  const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
  console.log("movieQuery:::", movieQuery)
  const reviewsQuery = useQuery(["reviews", movieId], () => fetchReviews(movieId), { retry: false, select: state => state?.data })
  console.log("REVIEWS:::", reviewsQuery)
  const reviewsData = reviewsQuery?.data;
  const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false, select: state => state?.data })
  console.log("movieCast:::", movieCreditsQuery);
  const movieData = movieQuery?.data;
  const movieCastData = movieCreditsQuery?.data?.cast;
  const movieCrewData = movieCreditsQuery?.data?.crew;
  const job = ["director", "producer"];


  //  const cast_data_url=` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=14ccdb96456935bbb41591e99697d262&language=en-US`;
  //  const [castData,setCastData]=useState([]);
  //   useEffect(() => {
  //  (
  //     fetch(cast_data_url)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setCastData(json);
  //         // setLoading(false);
  //       }));
  //   }, []);
  console.log(movieData);

  return (<>
    <h1>DetailPage</h1>
    {console.log(movieData)}
    <div className='d-flex justify-content-center'>
      <div className="col-sm-5"  >
        <img key={movieData?.id} style={{ width: '25rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" /></div>
        <div className="col-sm-6" > 
        <h3 className='mb-2 text-center'>Movie Name: {movieData?.title}</h3>
        <h6>Overview: {movieData?.overview}</h6>
        <h6>Movie Released Date:{movieData?.release_date}</h6>
        <h6 >Genre:{movieData?.genres.map(item => <span key={item?.id} >{item.name} </span>)}</h6>

        </div>
    </div>

    {/* <h6>Cast:</h6>
    {
      movieCrewData?.filter(item => job.includes(item.job.toLowerCase())).map(item => <li key={item}> <strong>{item.job}</strong>: {item.name}</li>)
    }

    {
      movieCastData?.map((item,index) =>
     <CastCard>
       <img key={item} width={"100"} height={"150"} src={item.profile_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt="" />

          <h6>{item.name}</h6>
          <h6> {item.character}</h6>
          </CastCard>
          
      )} */}
  </>
  );


}

export default DetailPage;
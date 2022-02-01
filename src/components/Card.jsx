import React from 'react';
import DotIcon from './IconButtons/DotIcon';
import SaveIcon from './IconButtons/SaveIcon';
import HeartIcon from './IconButtons/HeartIcon';
import FavFilled from './IconButtons/FavFilled';
import SavFilled from './IconButtons/FavFilled';
import { Link } from "react-router-dom";

function Card({img,releaseDate,title,id}) {
  return (
    <>
      <div className="card" style={{ width: '15rem' }}>
        {/* <HeartIcon/> */}
        <FavFilled/>
        <img
          src={`${img}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
         <Link  to={"detail/"+{id}} style={{ color: 'black' }}> <h5 className="card-title">{title}</h5></Link>
         
          <h5 className="card-title">{releaseDate}</h5>
        </div>
      </div>
    </>
  );
}

export default Card;

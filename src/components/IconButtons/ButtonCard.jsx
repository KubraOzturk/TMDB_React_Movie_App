import React from 'react';
import FavFilled from './FavFilled';
import SavFilled from './FavFilled';
import { Link } from "react-router-dom";

function ButtonCard({img,releaseDate,title,id}) {
  return (
    <>
      <div className="card" style={{ width: '16rem' ,backgroundColor:"#ecf0f1"}}>
        <FavFilled/>
      </div>
    </>
  );
}

export default ButtonCard;
import React from 'react';

//import SortFilter from './SortFilter/SortFilter';
import FilterPage from './SortFilter/FilterPage';



function Popular(props) {

  return (<>
    <h1>Popular</h1>
    <div style={{width:"50%",height:"50%"}}>
      <FilterPage />
    </div>
    </>
  );
}

export default Popular;

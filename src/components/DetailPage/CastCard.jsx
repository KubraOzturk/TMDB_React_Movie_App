import React from "react";
import styled from "styled-components"

// function CastCard( img,role, name) {
//     return (<>
//         <div className="card d-flex" style={{ width: '8rem' }}>
//             <img
//                 src={img}
//                 className="card-img-top"
//                 alt="..."
//             />
//             <div className="card-body ">
//                 <p className="card-title">{name}</p>
//                 <p className="card-title">{role}</p>
//             </div>
//         </div>

//     </>);
// }
//position:block;
// export default CastCard;

 const Cast = styled.div`
    
    display:inline-block;
    white-space:normal;
    margin: 4px;
    vertical-align:middle;
    align-items: center;
    border-radius: 150px;
    width: '8rem'
    `

 const CastDescription = styled.div`
   max-width: 100px;
   font-size: 12px;`

 export {CastDescription, Cast}

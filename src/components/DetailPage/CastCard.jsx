import React from "react";

function CastCard(img, role, name) {
    return (<>
        <div className="card d-flex" style={{ width: '8rem' }}>
            {/* <img
                src={img}
                className="card-img-top"
                alt="..."
            /> */}
            <div className="card-body ">
                <p className="card-title">{name}</p>
                <p className="card-title">{role}</p>
            </div>
        </div>

    </>);
}

export default CastCard;
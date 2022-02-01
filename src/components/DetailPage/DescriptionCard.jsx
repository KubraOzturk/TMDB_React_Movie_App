import React from 'react';

function DescriptionCard({ img, releaseDate, title,description,crew}) {
    return (
        <>
            <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{releaseDate}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescriptionCard;

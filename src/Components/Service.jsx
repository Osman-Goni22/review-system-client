import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card bg-base-100 shadow">
            <figure>
                <img
                    src={service.photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
            
                 {
                    service.title
                 }
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Service;
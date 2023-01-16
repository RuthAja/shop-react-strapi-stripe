import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    {/* jika ada isNew
                    maka span keluar */}
                    <img src={item.img} alt="" className="mainImg" />
                    {/* {item.img2 && (
                        <img src={item.img2} alt="" className="secondImg" />
                    )} */}
                    <img src={item.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    );
};

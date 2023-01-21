import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List/List";
import "./Products.scss";

export const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Products Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="sepatu" id="1" value={1} />
                        <label htmlFor="1">Sepatu</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="celana" id="2" value={2} />
                        <label htmlFor="2">Celana</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="jaket" id="3" value={3} />
                        <label htmlFor="3">Jaket</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input
                            type="range"
                            name="filterPrice"
                            min={0}
                            max={99999}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input
                            type="radio"
                            name="price"
                            id="asc"
                            value={"asc"}
                            onChange={(e) => setSort("asc")}
                        />
                        <label htmlFor="asc">Harga (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input
                            type="radio"
                            name="price"
                            id="desc"
                            value={"desc"}
                            onChange={(e) => setSort("desc")}
                        />
                        <label htmlFor="desc">Harga (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img
                    className="catImg"
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    );
};

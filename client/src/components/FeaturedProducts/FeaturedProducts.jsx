import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

export const FeaturedProducts = ({ type }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_API_URL + "/products?populate=*", // ?populate=*, untuk memunculkan data media / gambar atau menampilkan semua data ?
                    {
                        headers: {
                            Authorization:
                                "bearer " + process.env.REACT_APP_API_TOKEN,
                        },
                    }
                );
                setData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    console.log(data);
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quos, doloremque, animi veritatis molestias vero
                    reiciendis est repudiandae eligendi cumque voluptatibus
                    unde, hic vel accusantium distinctio officiis tempora
                    obcaecati eum!
                </p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

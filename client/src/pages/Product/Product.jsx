import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinyrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinyrgb&w=1600&lazy=load",
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img
                        src={images[0]}
                        alt=""
                        onClick={(e) => setSelectedImg(0)}
                    />
                    <img
                        src={images[1]}
                        alt=""
                        onClick={(e) => setSelectedImg(1)}
                    />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Judul</h1>
                <span className="price">Rp. 198.000</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi placeat tempora tenetur quod ad aspernatur, saepe
                    soluta enim voluptates aperiam cupiditate excepturi
                    similique impedit neque asperiores ducimus odio veniam
                    corporis?
                </p>
                <div className="quantity">
                    <button
                        // onClick={(e) =>
                        //     quantity === 0
                        //         ? setQuantity(0)
                        //         : setQuantity((hugla) => hugla - 1)
                        // }
                        onClick={(e) =>
                            setQuantity((hugla) =>
                                hugla === 1 ? 1 : hugla - 1
                            )
                        }
                    >
                        -
                    </button>
                    {quantity}
                    <button onClick={(e) => setQuantity((prev) => prev + 1)}>
                        +
                    </button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> Tambahkan ke Keranjang
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> Tambahkan ke Wish List
                    </div>
                    <div className="item">
                        <BalanceIcon /> Bandingkan
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

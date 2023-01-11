import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/ina.png" alt="indonesia" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>Rp.</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">
                            Wanita
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">
                            Pria
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">
                            Anak-anak
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        ION STORE
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">
                            Halaman Utama
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Tentang Kami
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Kontak
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Toko
                        </Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
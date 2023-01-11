import React from "react";
import "./Footer.scss";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Kategori</h1>
                    <span>Wanita</span>
                    <span>Pria</span>
                    <span>Sepatu</span>
                    <span>Aksesoris</span>
                    <span>Pendatang Baru</span>
                </div>
                <div className="item">
                    <h1>Link</h1>
                    <span>FAQ</span>
                    <span>Halaman</span>
                    <span>Toko</span>
                    <span>Membandingkan</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>Tentang Kami</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo repellat sunt earum officia, ea doloremque veniam
                        magni commodi nobis. Laudantium itaque quasi consectetur
                        corporis illo, distinctio voluptate perspiciatis impedit
                        veritatis.
                    </span>
                </div>
                <div className="item">
                    <h1>Kontak</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo repellat sunt earum officia, ea doloremque veniam
                        magni commodi nobis. Laudantium itaque quasi consectetur
                        corporis illo, distinctio voluptate perspiciatis impedit
                        veritatis.
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Ion Store</span>
                    <span className="copyright">
                        Copyright 2023 Ion Inc. All rights reserved.
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="alat pembayaran" />
                </div>
            </div>
        </div>
    );
};

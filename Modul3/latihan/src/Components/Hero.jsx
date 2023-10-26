import React from "react";

function Hero() {
    const paragraphStyle = {
        textIndent: "20px", // Ubah angka ini sesuai dengan jumlah spasi yang Anda inginkan
      };

  return (
    <div>
      <h1 style ={paragraphStyle}> Welcome to Our Website</h1>
      <p style ={paragraphStyle}>Latihan Praktikum.</p>
      <p style ={paragraphStyle}>Nama: Anissa Yulidha Rodiyah</p>
      <p style ={paragraphStyle}>NIM : 202110370311304</p>
    </div>
  );
}

export default Hero;
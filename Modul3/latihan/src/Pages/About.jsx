import React from "react";

function About() {
  const paragraphStyle = {
    textIndent: "20px", // Ubah angka ini sesuai dengan jumlah spasi yang Anda inginkan
  };

  return (
    <div>
      <h2 style={paragraphStyle}>About Us</h2>
      <p style={paragraphStyle}>Informatika UMM</p>
    </div>
  );
}

export default About;
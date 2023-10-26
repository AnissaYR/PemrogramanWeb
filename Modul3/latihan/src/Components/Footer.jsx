import React from "react";

function Footer() {
    const paragraphStyle = {
        textIndent: "20px", // Ubah angka ini sesuai dengan jumlah spasi yang Anda inginkan
      };
    return (
        <footer>
        <p style={paragraphStyle}>&copy; Universitas Muhammadiyah Malang.</p>
        </footer>
    );
}

export default Footer;
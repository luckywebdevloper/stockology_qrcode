import Link from "next/link";
import React from "react";
// import "./share.css";
import { FaFacebookF, FaMailBulk, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Share = () => {
  return (
    <div>
      <div className="bg-box">
        <div className="share-btn">
          <span className="text-share-btn">Share</span>
          <ul className="share-items">
            <li>
              <Link href="https://www.facebook.com/sharer/sharer.php?u=https://stockology-qrcode.vercel.app/">
                <FaFacebookF fontSize={"17px"} />
              </Link>
            </li>
            <li>
              <Link href="http://www.twitter.com/share?url=https://stockology-qrcode.vercel.app/">
                <FaTwitter fontSize={"17px"} />
              </Link>
            </li>
            <li>
              <Link href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://stockology-qrcode.vercel.app/">
                <FaMailBulk fontSize={"17px"} />
              </Link>
            </li>
            <li>
              <Link href="whatsapp://send?text=check out this site https://stockology-qrcode.vercel.app/">
                <FaWhatsapp fontSize={"17px"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Share;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../app/page.module.css";
import "../../app/globals.css";
import call from "../../image/telephone.svg";
import logo from "../../image/favicon.png";
import mail from "../../image/mail.svg";
import mailW from "../../image/mailwhite.svg";
import web from "../../image/web.svg";
import bag from "../../image/bag.svg";
import phone from "../../image/phonew.svg";
import Share from "../../app/share";
const index = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className="cover">
          <div className="top">
            <div className="profile">
              <Image className="avatar" src={logo} alt="Joshuasm32" />
            </div>
            <div className="username">Aniket Shukla</div>
            <p>Director</p>
            <div className="link">
              <Link href={"tel:+91 8103664071"}>
                <Image className="button " src={call} alt="call" />
                <p>Call</p>
              </Link>
              <Link href={"mailto:aniket.s@stockologysecurities.com"}>
                <Image className="button twitter" src={mail} alt="call" />
                <p>Mail</p>
              </Link>
            </div>
          </div>

          <div className="social">
            <div className="link-box">
              <Link href={"tel:+91 8103664071"}>
                <div className="box">
                  <Image className="button twitter" src={phone} alt="mail" />
                  <h4>+91 8103664071</h4>
                </div>
                <p>Mobile</p>
              </Link>
            </div>
            <div className="link-box">
              <Link href={"mailto:aniket.s@stockologysecurities.com"}>
                <div className="box">
                  <Image className="button twitter" src={mailW} alt="mail" />
                  <h4>aniket.s@stockologysecurities.com</h4>
                </div>
                <p>Email</p>
              </Link>
            </div>{" "}
            <div className="link-box">
              <div className="box">
                <Image className="button twitter" src={bag} alt="mail" />
                <h4>Stockology Securities Pvt. Ltd.</h4>
              </div>
            </div>{" "}
            <div className="link-box">
              <Link href={"https://stockologysecurities.com"}>
                <div className="box">
                  <Image className="button twitter" src={web} alt="mail" />
                  <h4>www.stockologysecurities.com</h4>
                </div>
                <p>Website</p>
              </Link>
            </div>
          </div>
          {/* <div className="description">
      My name is Josh and I like to tinker Innovation drives me forward.
    </div> */}
          <Share />
        </div>
      </main>
    </div>
  );
};

export default index;

import React from "react";
import styels from "../Footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styels.containar}>
      <div className={styels.one}>
        <div className={styels.div_one}>
          <Image
            src={"/images/logo-1.png"}
            alt="logo"
            height={100}
            width={120}
          />
        </div>
        <div className={styels.div_two}>
          <h1 className={styels.footer_headers}>
            <i> Usefull Links </i>
          </h1>
          <p className={styels.footer_peras}>Home</p>
          <p className={styels.footer_peras}>Shop</p>
          <p className={styels.footer_peras}>About Us</p>
          <p className={styels.footer_peras}>Contect Us</p>
        </div>
        <div className={styels.div_three}>
          <h1 className={styels.footer_headers}>
            <i> Our Collection</i>
          </h1>
          <p className={styels.footer_peras}>Mountain Bikes</p>
          <p className={styels.footer_peras}>City Bikes</p>
          <p className={styels.footer_peras}>Speciality Bikes</p>
          <p className={styels.footer_peras}>Electric Bikes</p>
        </div>
        <div className={styels.div_four}>
          <h1 className={styels.footer_headers}>
            <i> Account</i>
          </h1>
          <p className={styels.footer_peras}>Customar Login</p>
          <p className={styels.footer_peras}>Dealer Login</p>
          <p className={styels.footer_peras}>Addresses</p>
          <p className={styels.footer_peras}>Payment Methods</p>
        </div>
      </div>

      <div className={styels.two}>
        <div className={styels.last_footer}>
          <h1>&copy; 2024 Cycle Shop created by Faizan.</h1>

          <div className={styels.images_div}>
            <div className={styels.icon_div}>
              <Link
                href={"https://www.linkedin.com/in/muhammad-faizan-2541132b8"}
              >
                <Image
                  className={styels.icons}
                  src={"/images/linkedin.svg"}
                  alt="linkedin"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
            <div className={styels.icon_div}>
              <Link href={"https://www.instagram.com/fazii.963/"}>
                <Image
                  className={styels.icons}
                  src={"/images/instagram.svg"}
                  alt="instagram"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
            <div className={styels.icon_div}>
              <Link href={"https://wa.me/+923406044359"}>
                <Image
                  className={styels.icons}
                  src={"/images/whatsapp.svg"}
                  alt="whatsapp"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
            <div className={styels.icon_div}>
              <Link href={"https://x.com/muhammadf4060"}>
                <Image
                  className={styels.icons}
                  src={"/images/twitter-x.svg"}
                  alt="twitter-x"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

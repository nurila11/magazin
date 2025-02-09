import React from "react";
import TvitterIcon from "../../images/TvitterIcon";
import VkIcon from "../../images/VkIcon";
import TgIcon from "../../images/TgIcon";

export default function Footer() {
  return (
    <div className="bg-[#1C1C1C] py-[90px]" id="footer">
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <a
            href="tel:+996502071773"
            className="text-white text-[48px] font-semibold"
          >
            +996 220 243 486
          </a>
          <a
            href="malitto:nurila@gmail.com"
            className="text-white text-[48px] font-semibold"
          >
            nurila@gmail.com
          </a>
          <p className="text-white text-[18px]">г.Бишкек ТРЦ Азия Молл</p>
          <div className="flex_items-center_gap-2">
            <p>Whatsapp</p>
            <p> Instagram</p>
            <p>Telegram</p>
            {/* <TvitterIcon /> */}
            {/* <VkIcon />
            <TgIcon /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

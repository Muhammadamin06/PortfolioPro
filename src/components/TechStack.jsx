import React from "react";
import { AiFillHtml5,AiFillGithub } from "react-icons/ai";
import { DiSass } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import {FaBootstrap} from 'react-icons/fa'
import { BiLogoCss3,BiLogoJavascript,BiLogoReact,BiLogoGit } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from "swiper/modules";

function TechStack() {
  return (
    <section id="stack" className="stack">
      <h2 className="title">My Tech Stack</h2>
      <p className="text">
        Technologies I've been working with recently
      </p>

      <div className="stack__block">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="stack__swiper"
        >
          <SwiperSlide><p className="stack__item"><AiFillHtml5 /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><BiLogoCss3 /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><BiLogoJavascript /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><BiLogoReact /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><DiSass /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><BiLogoGit /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><AiFillGithub /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><TbBrandVscode /></p></SwiperSlide>
          <SwiperSlide><p className="stack__item"><FaBootstrap /></p></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default TechStack;

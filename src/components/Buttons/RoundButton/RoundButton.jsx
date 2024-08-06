import React from 'react';
import s from './RoundButton.module.sass';


const RoundButton = ({ text, onClick }) => {
  return (
    <button className={s.roundButton} onClick={onClick}>
      <svg
        className={s.roundButton__svg}
        xmlns="http://www.w3.org/2000/svg"
        width="106"
        height="106"
        viewBox="0 0 106 106"
        fill="none"
      >
        <g filter="url(#filter0_d_297_669)">
          <circle cx="50" cy="50" r="50" />
          <circle cx="50" cy="50" r="49.5" />
        </g>
        <defs>
          <filter
            id="filter0_d_297_669"
            x="0"
            y="0"
            width="106"
            height="106"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.521569 0 0 0 0 0.27451 0 0 0 0 0.156863 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_297_669"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_297_669"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <span className={s.roundButton__text}>{text}</span>
    </button>
  );
};

export default RoundButton;
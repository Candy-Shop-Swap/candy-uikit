import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" xmlSpace="preserve" {...props}>
      <style>
        {
          ".st0{fill:#78ecff}.st1{fill:#6dd1e2}.st2{fill:#622066}.st3{fill:#ff73ef}.st4{fill:#ffe600}.st5{fill:#ff9e16}.st7{fill:#fff}.st8{fill:#e856de}.st9{fill:#ffe317}.st10{fill:#ffc7d4}.st11{fill:#fff19f}.st12{fill:#88e9ff}.st13{fill:#d4f9ff}.st15{fill:#ff99b4}"
        }
      </style>
      <switch>
        <g>
          <path
            className="st0"
            d="M28.2 23.6s1.4.3 2.4-.7c.6-.5.9-1.3 1-2 0-.2.2.3.8.1.2-.1.4-.3.3-.7-.2-.9-1.5-.8-1.9.1-.2.4-.4 1.1-.8 1.6-.6 1.1-1.8 1.6-1.8 1.6z"
          />
          <path
            className="st1"
            d="M32 19.8c-.6.3-.6.3-.6.5 0 .8-.3 1.7-.8 2.4-.9 1.1-2.1 1-2.1 1s.6-.2 1.1-.9c.2-.2.4-.4.5-.6.3-.5.6-1.2.8-1.6.2-.6.7-.8 1.1-.8z"
          />
          <path
            className="st2"
            d="M28.7 23.8h-.5c-.1 0-.1-.1-.1-.1 0-.1 0-.1.1-.1 0 0 1.2-.5 1.8-1.5.2-.3.4-.8.5-1.1.1-.2.2-.4.2-.5.2-.5.7-.8 1.2-.8s.8.3 1 .7c.1.5-.2.8-.4.9-.1 0-.2.1-.3.1-.2 0-.3-.1-.4-.1-.1.7-.5 1.4-1 1.9-.8.5-1.6.6-2.1.6zm3.2-3.9c-.4 0-.8.2-1 .6-.1.1-.1.3-.2.5-.2.4-.3.8-.6 1.2-.4.7-1.1 1.1-1.5 1.4.5 0 1.2-.1 1.8-.7.5-.5.9-1.2 1-1.9 0-.2.1-.2.2-.2s.1 0 .2.1.2.1.3.1h.2c.1 0 .3-.2.2-.6 0-.3-.2-.5-.6-.5z"
          />
          <path
            className="st2"
            d="M31.6 21.1c-.1 0-.1-.1-.1-.1s0-.4.2-.6c.1-.1.2-.1.3-.1.2 0 .3.2.3.4 0 .1 0 .1-.1.2-.1 0-.1 0-.2-.1 0 0 0-.1-.1-.1h-.1c-.1.1-.1.3-.1.4h-.1z"
          />
          <path
            className="st3"
            d="M31.9 18.5s-1.8-.5-2.5 1.3c-.2.6-.2 1.5-.4 2.3-.3.9-.9 1.7-.9 1.7s2.1-.9 2.3-1.3c.1-.6.6-3.6 1.5-4z"
          />
          <path
            className="st2"
            d="M28.1 23.8s-.1 0-.1-.1v-.2s.5-.7.9-1.6c.1-.4.2-.8.2-1.2 0-.4.1-.7.2-1.1.2-.5.5-.9 1-1.2.3-.2.7-.3 1.1-.3.3 0 .6.1.6.1.1 0 .1.1.1.1 0 .1 0 .1-.1.1-.2.1-.6.5-.9 1.5-.2.7-.4 1.5-.5 2 0 .2-.1.3-.1.4 0 .1-.2.4-1.2.9-.6.4-1.1.6-1.2.6.1 0 .1 0 0 0zm3.3-5.3c-.6 0-1.4.2-1.8 1.3-.1.3-.1.6-.2 1 0 .4-.1.8-.2 1.3-.2.5-.4 1-.6 1.3.2-.1.4-.2.7-.3 1-.5 1.1-.7 1.1-.7 0-.1 0-.2.1-.3.1-.5.3-1.3.5-2s.5-1.2.8-1.5c-.3-.1-.4-.1-.4-.1z"
          />
          <path
            className="st4"
            d="M28 23.6s1.4.1 2.4-1.1c.6-.8.8-1.8.7-2.6 0-.3.3.3 1-.1.2-.1.5-.5.3-.9-.4-1-1.9-.5-2.2.7-.1.6-.2 1.4-.4 2.1-.6 1.5-1.8 1.9-1.8 1.9z"
          />
          <path
            className="st5"
            d="M30.5 19.6c-.1.6-.2 1.4-.4 2.1-.5 1.3-1.4 1.8-1.7 1.9H28s1.2-.5 1.8-2c.3-.7.3-1.5.4-2.1.2-.8 1-1.3 1.6-1.2-.5.1-1.1.6-1.3 1.3z"
          />
          <path d="M31.4 19.9c0-.2.1 0 .3 0-.1.1-.2.1-.3 0z" fill="#ff9cdc" />
          <path
            className="st2"
            d="M28.1 23.8c-.1 0-.1 0 0 0-.2 0-.2-.1-.2-.1 0-.1 0-.1.1-.1 0 0 .3-.1.6-.4.3-.3.8-.7 1.1-1.5.2-.4.2-.9.3-1.3 0-.3.1-.5.1-.7.2-.9.9-1.3 1.5-1.3.4 0 .8.2.9.6.2.6-.1 1-.3 1.1-.2.1-.3.1-.5.1s-.3-.1-.4-.1c0 1.1-.3 2-.8 2.6-.9 1-2.1 1.1-2.4 1.1zm3.5-5.3c-.2 0-.5.1-.7.3-.2.2-.4.5-.5.8-.1.2-.1.5-.1.7-.1.4-.1.9-.3 1.4-.3.8-.8 1.3-1.1 1.6-.1.1-.1.1-.2.1.5-.1 1.2-.3 1.7-1 .5-.6.7-1.4.7-2.5 0-.1 0-.1.1-.2h.1c.1 0 .1 0 .2.1.1 0 .2.1.3.1.1 0 .2 0 .4-.1.1-.1.4-.3.2-.8-.3-.3-.5-.5-.8-.5z"
          />
          <path
            className="st2"
            d="M31.1 20s-.1 0-.1-.1c0 0-.1-.9.5-1 .3 0 .4.2.5.3l-.2.1s-.1-.1-.2-.1c-.4.1-.3.8-.3.8h-.2c.1 0 0 0 0 0z"
          />
          <path
            className="st7"
            d="M30 20.1c0 2.7-2.3 3.6-6 3.6s-6-.8-6-3.5 2.3-10.7 6-10.7c3.7-.1 6 7.9 6 10.6z"
          />
          <path
            className="st2"
            d="M23.9 23.8c-2 0-3.4-.3-4.4-.8-.5-.3-1-.7-1.2-1.1-.3-.5-.4-1.1-.4-1.8s.1-1.7.4-2.8c.2-.9.6-2.2 1.2-3.6.6-1.3 1.2-2.3 1.9-3.1.8-.9 1.7-1.3 2.6-1.3.9 0 1.8.4 2.6 1.3.7.7 1.3 1.8 1.9 3.1.5 1.1.9 2.3 1.2 3.6.3 1.1.4 2.1.4 2.8 0 .7-.1 1.3-.4 1.8-.3.5-.7.9-1.3 1.2-.9.4-2.4.7-4.5.7.1 0 .1 0 0 0zM24 9.6c-.8 0-1.6.4-2.4 1.3-.7.7-1.3 1.7-1.9 3-1 2.3-1.6 5-1.6 6.3 0 2.4 1.8 3.4 5.8 3.4h.1c2 0 3.4-.3 4.3-.8 1-.6 1.6-1.4 1.6-2.7 0-1.3-.6-3.9-1.6-6.3-.6-1.3-1.2-2.3-1.9-3-.8-.8-1.6-1.2-2.4-1.2z"
          />
          <path
            className="st3"
            d="M28.4 7.3s2.3.9 2.8 4.1c.3 2.1-.3 3.8-.3 3.8s1.3.3.8 1.6-3.2.8-2.6-1.9c.4-1.7 1.7-4.8-.7-7.6z"
          />
          <path
            className="st8"
            d="M29.7 16.1c.4-1.8 2.3-5-.1-7.9 0 0 .1 0 .2.1-.7-.7-1.3-1-1.3-1 2.4 2.9 1.1 5.9.6 7.7-.4 1.6.4 2.4 1.2 2.6-.4-.4-.8-.8-.6-1.5z"
          />
          <path
            className="st2"
            d="M30.5 17.7c-.5 0-1-.2-1.3-.6-.3-.4-.6-1-.3-2.1.1-.2.1-.5.2-.8.5-1.8 1.2-4.4-.8-6.8v-.2s.1-.1.2 0c0 0 .6.2 1.3.9.4.4.7.8 1 1.3.3.6.5 1.3.6 2.1.2 1.1.1 2.1 0 2.8-.1.5-.2.8-.2 1 .2.1.6.2.8.6.2.3.2.7 0 1.1-.4.4-.9.7-1.5.7zm-1.6-10c.3.5.6.9.7 1.4.2.6.3 1.2.3 1.9 0 1.2-.3 2.3-.6 3.2-.1.3-.2.5-.2.8-.2 1 0 1.6.3 1.9.3.3.7.5 1.1.5.5 0 .8-.2 1-.6.1-.4.2-.7 0-.9-.2-.4-.7-.5-.7-.5s-.1 0-.1-.1v-.1s.6-1.7.3-3.8c-.2-1.7-1-2.7-1.5-3.2-.2-.2-.4-.4-.6-.5z"
          />
          <path
            className="st2"
            d="M30.7 16.6c-.1 0-.2 0-.3-.1-.2-.1-.3-.2-.3-.4-.1-.5.2-.9.5-1 .4-.1.8.3.9.3.1 0 .1.1 0 .2 0 .1-.1.1-.2 0s-.4-.3-.6-.2c-.2.1-.5.3-.4.7 0 .1.1.2.2.2.2.1.4 0 .4 0 .1 0 .1 0 .2.1 0 .1 0 .1-.1.2h-.3z"
          />
          <path
            className="st3"
            d="M26 6c.7.3 1.5 0 1.8-.6.3-.6 0-1.4-.8-1.7-.7-.3-2.4-.4-2.7.2-.2.6 1 1.8 1.7 2.1z"
          />
          <path
            className="st8"
            d="M25.5 5.6c.7.3 1.4 0 1.7-.6.3-.6 0-1.3-.6-1.5.2 0 .4.1.5.1.7.3 1 1.1.8 1.7-.4.7-1.2 1-1.9.7-.2-.1-.5-.3-.7-.5.1 0 .2.1.2.1z"
          />
          <path
            className="st2"
            d="M26.6 6.2c-.2 0-.4 0-.6-.1-.5-.2-1.4-1-1.7-1.6-.1-.2-.1-.4 0-.6.2-.5 1-.5 1.4-.5.5 0 1.1.1 1.4.2.4.1.7.4.9.8.1.3.1.7 0 1-.3.5-.8.8-1.4.8zm-.9-2.6c-.6 0-1.1.1-1.2.4v.4c.2.6 1 1.3 1.6 1.5.2.1.4.1.5.1.5 0 .9-.3 1.1-.7.1-.3.1-.5 0-.8-.1-.3-.4-.6-.7-.7-.3-.2-.8-.2-1.3-.2z"
          />
          <path
            className="st9"
            d="M22 6c-.7.3-1.5 0-1.8-.6-.3-.6 0-1.4.8-1.7.7-.3 2.4-.4 2.7.2.2.6-1 1.8-1.7 2.1z"
          />
          <path
            className="st5"
            d="M22.5 5.6c-.7.3-1.4 0-1.7-.6-.3-.6 0-1.3.6-1.5-.2 0-.4.1-.5.1-.7.3-1 1.1-.8 1.7.4.7 1.2 1 1.9.7.2-.1.5-.3.7-.5-.1 0-.2.1-.2.1z"
          />
          <path
            className="st2"
            d="M21.4 6.2c-.6 0-1.1-.3-1.3-.8-.1-.3-.2-.7 0-1 .1-.4.5-.7.9-.9.4-.1.9-.2 1.4-.2.4 0 1.2.1 1.4.5.1.2.1.4 0 .6-.3.7-1.2 1.4-1.7 1.6-.3.2-.5.2-.7.2zm.9-2.6c-.5 0-1 .1-1.3.2-.3.1-.6.4-.7.7-.1.3-.1.6 0 .8.2.4.6.7 1.1.7.2 0 .4 0 .5-.1.5-.2 1.3-.9 1.6-1.5.1-.2.1-.3 0-.4-.1-.3-.5-.4-1.2-.4z"
          />
          <path
            className="st7"
            d="M30.5 9.3c0 3.3 1.9 6.3-6.5 6.3-8.6 0-6.5-3.1-6.5-6.3 0-3.3 2.9-5.2 6.5-5.2s6.5 1.9 6.5 5.2z"
          />
          <path
            className="st2"
            d="M24 15.7c-1.8 0-3.1-.1-4.2-.4-1-.2-1.6-.6-2.1-1.1-.8-.9-.7-2.1-.5-3.4.1-.5.1-1.1.1-1.6 0-.8.2-1.6.5-2.2.3-.6.8-1.2 1.4-1.7 1.4-.8 3-1.3 4.8-1.3 1.8 0 3.5.5 4.7 1.4.6.5 1.1 1 1.4 1.7.3.7.5 1.4.5 2.2 0 .5 0 1 .1 1.5.1 1.3.2 2.6-.6 3.5-.9 1-2.8 1.4-6.1 1.4zm0-11.5c-3.8 0-6.3 2-6.3 5 0 .6-.1 1.1-.1 1.7-.1 1.3-.3 2.4.4 3.2.4.4 1 .8 1.9 1 1 .3 2.4.4 4.1.4 1.7 0 3-.1 4-.4.9-.2 1.5-.6 1.9-1 .8-.8.7-2 .5-3.3 0-.5-.1-1-.1-1.6.1-2.9-2.5-5-6.3-5z"
          />
          <g>
            <ellipse
              transform="rotate(11.421 19.594 13.216)"
              className="st10"
              cx={19.6}
              cy={13.2}
              rx={1.1}
              ry={0.7}
            />
            <ellipse
              transform="rotate(168.579 28.411 13.21)"
              className="st10"
              cx={28.4}
              cy={13.2}
              rx={1.1}
              ry={0.7}
            />
          </g>
          <g>
            <path
              className="st9"
              d="M28 4.4s2.9 1.4 3.2 5.2c.2 2.4-.9 4.1-.9 4.1s1.5.4.8 1.9-3.7.7-2.9-2.3c.7-2.1 2.4-5.5-.2-8.9z"
            />
            <ellipse
              transform="rotate(31.537 30.556 14.281)"
              className="st11"
              cx={30.6}
              cy={14.3}
              rx={0.3}
              ry={0.2}
            />
            <path
              className="st5"
              d="M29.5 13.3c.5-1.6 1.7-4.1.8-6.8C29.3 5 28 4.4 28 4.4c2.6 3.4.9 6.8.3 8.8-.7 2.3.9 3.3 2 3-.7-.4-1.2-1.3-.8-2.9z"
            />
            <path
              className="st2"
              d="M30 16.4c-.6 0-1.1-.3-1.5-.8-.2-.3-.4-.6-.4-1-.1-.4 0-.9.1-1.4l.3-.9c.7-2.1 1.6-4.9-.6-7.8v-.2s.1-.1.2 0c0 0 .8.4 1.5 1.2.5.5.8 1 1.1 1.6.4.7.6 1.6.7 2.4.1 1.3-.1 2.3-.4 3-.2.5-.3.8-.4 1 .2.1.6.3.8.7.2.4.1.8-.1 1.3-.2.6-.7.9-1.3.9zM28.5 4.8c.3.5.6 1.1.8 1.7.2.7.3 1.4.3 2.2-.1 1.4-.5 2.6-.8 3.7l-.3.9c-.3 1.2-.1 1.8.2 2.2.3.4.8.6 1.3.6s.9-.2 1.1-.7c.2-.4.2-.8.1-1-.2-.5-.8-.6-.8-.6s-.1 0-.1-.1v-.1s.3-.4.5-1.1c.2-.6.5-1.7.3-2.9-.2-1.9-1-3.2-1.7-3.9-.3-.4-.6-.7-.9-.9z"
            />
            <path
              className="st0"
              d="M29.2 13.3c.7-2.3 1.8-4.6.4-7.6-.8-1-1.5-1.4-1.5-1.4 2.6 3.4.9 6.8.3 8.8-.6 2 .2 3.3 1.8 3-1.2.1-1.5-1.2-1-2.8z"
            />
            <path
              className="st2"
              d="M29.6 16.4c-.5 0-1-.2-1.2-.6-.2-.3-.3-.7-.4-1.1 0-.5 0-1 .2-1.5l.3-.9c.7-2 1.6-4.9-.6-7.8v-.2s.1-.1.2 0c0 0 .8.4 1.6 1.4 1.3 2.6.6 4.7-.1 6.8l-.3.9c-.3 1-.3 1.9 0 2.4.2.2.4.3.7.3.1 0 .1.1.1.1 0 .1 0 .1-.1.1 0 .1-.2.1-.4.1zM28.5 4.9c.3.5.6 1.1.8 1.7.2.7.3 1.4.3 2.2-.1 1.4-.5 2.6-.8 3.7l-.3.9c-.3 1-.2 1.9.1 2.4.2.2.4.4.7.5l-.2-.2c-.4-.5-.4-1.5-.1-2.6l.3-.9c.6-2 1.3-4 .1-6.5-.3-.7-.6-1-.9-1.2z"
            />
            <path
              className="st2"
              d="M30.2 15.2c-.1 0-.3 0-.4-.1-.2-.1-.3-.3-.3-.5-.1-.4 0-.6.2-.7.1-.2.3-.3.5-.3.5-.1 1 .4 1 .4.1.1 0 .1 0 .2-.1.1-.1 0-.2 0-.1-.1-.5-.4-.7-.3-.2.1-.6.3-.5.8 0 .1.1.2.2.3.2.1.5 0 .5 0 .1 0 .1 0 .2.1 0 .1 0 .1-.1.2-.1-.2-.2-.1-.4-.1z"
            />
            <circle className="st7" cx={31.8} cy={13.2} r={0.1} />
          </g>
          <g>
            <path
              className="st7"
              d="M19.4 19.6s1.3.2 2 1.1c.7.9.9 2.7.8 2.9-.4.4-1.2 1-2.5.4-1.4-.7-1.7-3.3-1.7-3.3"
            />
            <path
              className="st2"
              d="M20.8 24.4c-.3 0-.7-.1-1.1-.3-.3-.2-.7-.5-.9-.8-.2-.3-.4-.7-.5-1.1-.3-.7-.3-1.4-.3-1.4 0-.1 0-.1.1-.1s.1 0 .1.1c0 0 .3 2.5 1.6 3.2 1.3.6 2.2-.2 2.3-.4 0-.1 0-.5-.1-1.1-.1-.6-.4-1.2-.7-1.6-.6-.9-1.9-1-1.9-1-.1 0-.1-.1-.1-.1 0-.1.1-.1.1-.1.1 0 1.4.2 2.1 1.1.3.4.6 1.1.7 1.8 0 .2.2 1.1 0 1.3-.1.1-.4.5-1 .6 0-.1-.2-.1-.4-.1z"
            />
            <path
              className="st7"
              d="M19.7 24c.9.5 2.2.4 2.5.4.8 0 1.2-.2 1.2-.8 0-.5-.5-1-1.1-1-.5 0-.9.4-.9.4"
            />
            <path
              className="st10"
              d="M22.2 24.4c.8 0 1.2-.2 1.2-.8 0-.5-.5-1-1.1-1-.5 0-.9.4-.9.4s-1.6 1.4.8 1.4z"
            />
            <path
              className="st2"
              d="M21.8 24.6c-.5 0-1.5 0-2.2-.4-.1 0-.1-.1-.1-.2s.1-.1.2-.1c.8.4 1.9.4 2.3.4h.1c.9 0 1-.3 1-.6 0-.5-.4-.9-1-.9-.5 0-.8.4-.8.4 0 .1-.1.1-.2 0-.1 0-.1-.1 0-.2 0 0 .4-.5 1-.5.7 0 1.2.5 1.2 1.2 0 .3-.1.5-.3.7-.2.1-.5.2-1 .2h-.1-.1z"
            />
          </g>
          <g>
            <path
              className="st7"
              d="M28.6 19.6s-1.3.2-2 1.1c-.7.9-.9 2.7-.8 2.9.4.4 1.2 1 2.5.4 1.4-.7 1.7-3.3 1.7-3.3"
            />
            <path
              className="st2"
              d="M27.3 24.4c-.2 0-.4 0-.6-.1-.5-.2-.9-.5-1-.6-.2-.2 0-1.1 0-1.3.2-.7.4-1.3.7-1.8.7-1 2.1-1.1 2.1-1.1.1 0 .1 0 .1.1s0 .1-.1.1c0 0-1.3.2-1.9 1-.3.4-.5 1-.7 1.6-.1.6-.1 1-.1 1.1.2.2 1 1 2.3.4 1.3-.6 1.6-3.2 1.6-3.2 0-.1.1-.1.1-.1.1 0 .1.1.1.1s-.1.7-.3 1.4c-.1.4-.3.8-.5 1.1-.3.4-.6.7-.9.8-.2.4-.6.5-.9.5z"
            />
            <path
              className="st7"
              d="M28.3 24c-.9.5-2.2.4-2.5.4-.8 0-1.2-.2-1.2-.8 0-.5.5-1 1.1-1 .5 0 .9.4.9.4"
            />
            <path
              className="st10"
              d="M25.9 24.4c-.8 0-1.2-.2-1.2-.8 0-.5.5-1 1.1-1 .5 0 .9.4.9.4s1.5 1.4-.8 1.4z"
            />
            <path
              className="st2"
              d="M26.2 24.6H26h-.1c-.4 0-.7-.1-1-.2-.2-.1-.3-.4-.3-.7 0-.6.5-1.1 1.2-1.2.6 0 1 .5 1 .5v.2h-.2s-.4-.4-.8-.4c-.6 0-1 .4-1 .9 0 .4.2.6 1 .6h.1c.4 0 1.5 0 2.3-.4.1 0 .1 0 .2.1 0 .1 0 .1-.1.2-.6.3-1.6.4-2.1.4z"
            />
          </g>
          <g>
            <path
              className="st0"
              d="M24.3 23c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-5c0-.2.1-.3.3-.3.2 0 .3.1.3.3v5z"
            />
            <path
              className="st2"
              d="M24 23.4c-.2 0-.4-.2-.4-.4v-5c0-.2.2-.4.4-.4s.4.2.4.4v5c0 .2-.2.4-.4.4zm0-5.5c-.1 0-.2.1-.2.2v5c0 .1.1.2.2.2s.2-.1.2-.2v-5c0-.2-.1-.2-.2-.2z"
            />
          </g>
          <g>
            <circle className="st4" cx={24} cy={16.5} r={2.8} />
            <ellipse
              transform="rotate(45.396 22.323 14.839)"
              className="st7"
              cx={22.3}
              cy={14.8}
              rx={0.5}
              ry={0.8}
            />
            <ellipse
              transform="rotate(42.54 22.938 15.487)"
              className="st7"
              cx={22.9}
              cy={15.5}
              rx={0.2}
              ry={0.2}
            />
            <path
              className="st7"
              d="M21.5 16.7c0-1.5 1.2-2.8 2.8-2.8.5 0 1 .1 1.4.4-.5-.3-1-.5-1.6-.5-1.5 0-2.8 1.2-2.8 2.8 0 1 .6 1.9 1.4 2.4-.7-.6-1.2-1.4-1.2-2.3z"
            />
            <path
              className="st5"
              d="M26 14.6c.2.4.4.9.4 1.4 0 1.5-1.2 2.8-2.8 2.8-.8 0-1.5-.3-2-.9.5.8 1.4 1.4 2.4 1.4 1.5 0 2.8-1.2 2.8-2.8 0-.7-.3-1.4-.8-1.9z"
            />
            <path
              className="st2"
              d="M24 19.4c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9zm0-5.5c-1.5 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6 1.5 0 2.6-1.2 2.6-2.6 0-1.4-1.1-2.6-2.6-2.6z"
            />
            <g>
              <path
                className="st2"
                d="M24.4 18.9c-.7 0-1.4-.3-1.9-.8-.4-.4-.6-.9-.6-1.5s.3-1.2.7-1.7c.4-.4.8-.6 1.3-.6s1 .1 1.4.5c.4.3.7.9.7 1.4 0 .4-.1.9-.4 1.2-.3.3-.8.6-1.3.5-.5 0-.9-.2-1.1-.6-.2-.3-.3-.7-.3-1 0-.3.2-.6.5-.9.3-.3.9-.4 1.4 0 .2.2.3.5.3.7 0 .2-.1.5-.2.6-.2.2-.6.2-.8 0-.2-.2-.2-.5 0-.7.1-.1.1-.1.2 0s.1.1 0 .2-.1.2 0 .3c.1.1.3.1.5 0 .1-.1.1-.3.1-.4 0-.2-.1-.4-.2-.6-.3-.3-.8-.3-1 0-.5.4-.5 1-.1 1.5.3.4.7.5.9.5.4 0 .9-.2 1.1-.4.3-.3.3-.7.3-1 0-.5-.3-1-.6-1.3-.7-.6-1.7-.5-2.3.1-.4.4-.6 1-.7 1.5 0 .5.2.9.5 1.3.5.5 1.1.7 1.8.7s1.3-.3 1.8-.8c.1-.1.1-.1.2 0s.1.1 0 .2c-.6.6-1.3.9-2 .9l-.2.2z"
              />
            </g>
          </g>
          <g>
            <path
              className="st7"
              d="M21.3 17.1s.2.9 1.2 1.5c.9.5 1.2.6 1.3.6.2.1.2.6.1.8-.1.3-.6.5-1.2.5-2-.2-2.3-1.3-2.3-1.3"
            />
            <path
              className="st10"
              d="M23.8 19.2c-.1-.1-.2-.1-1.1-.5-.3.3-.5.7-.5 1.1 0 .2 0 .4.1.6h.3c.6 0 1.1-.2 1.2-.5.2-.1.2-.5 0-.7z"
            />
            <path
              className="st2"
              d="M22.9 20.6h-.2c-.8-.1-1.5-.4-1.9-.7-.4-.3-.7-.5-.7-.6v-.2h.2s.9 1 2.4 1.2c.5.1.9-.2 1-.4.1-.2.1-.6-.1-.6 0 0-.1 0-.2-.1l-1-.5c-1.2-.6-1.4-1.6-1.4-1.7 0-.1 0-.1.1-.1s.1 0 .1.1c0 0 0 .2.2.5.2.4.6.7 1 .9.5.3.8.4 1 .5.1.1.2.1.2.1.3.2.3.7.2 1-.1.2-.3.3-.5.5 0 .1-.2.1-.4.1z"
            />
          </g>
          <g>
            <path
              className="st7"
              d="M26.7 17.1s-.2.9-1.2 1.5c-.9.5-1.2.6-1.3.6-.2.2-.2.6-.1.8.1.3.6.5 1.2.5 2-.2 2.3-1.3 2.3-1.3"
            />
            <path
              className="st10"
              d="M24.2 19.2c.1-.1.2-.1 1.1-.5.3.3.5.7.5 1.1 0 .2 0 .4-.1.6h-.3c-.6 0-1.1-.2-1.2-.5-.2-.1-.2-.5 0-.7z"
            />
            <path
              className="st2"
              d="M25.1 20.6c-.2 0-.4 0-.6-.1-.2-.1-.4-.3-.5-.5-.1-.3-.1-.8.2-1 .1 0 .1-.1.2-.1l1-.5c1.1-.6 1.2-1.5 1.2-1.5 0-.1.1-.1.1-.1.1 0 .1.1.1.1s-.2 1.1-1.4 1.7c-.5.3-.8.4-1 .5-.1.1-.2.1-.2.1-.1.1-.2.5-.1.6.1.2.5.5 1 .4 1.5-.2 2.4-1.2 2.4-1.2 0-.1.1-.1.2 0 .1 0 .1.1 0 .2 0 0-.3.3-.7.6-.4.3-1 .6-1.9.7.1.1 0 .1 0 .1z"
            />
          </g>
          <g>
            <ellipse className="st7" cx={24} cy={13.5} rx={1} ry={0.4} />
            <path
              className="st2"
              d="M25.2 13.5c0-.1-.3.3-1.2.3-.9 0-1.2-.4-1.2-.3-.1.2.4.6 1.2.6.8 0 1.3-.5 1.2-.6z"
            />
          </g>
          <g>
            <circle className="st2" cx={23.7} cy={13.3} r={0.2} />
            <circle className="st2" cx={24.3} cy={13.3} r={0.2} />
          </g>
          <g>
            <path
              className="st2"
              d="M21.6 11.2c-.6-.1-1.3.4-1.2.7 0 .1.4-.4 1.2-.3.4 0 .8.6.8.5.1-.1 0-.7-.8-.9z"
            />
            <path
              className="st2"
              d="M22.4 12.2s-.1 0-.2-.1c-.2-.1-.4-.4-.6-.4h-.2c-.5 0-.7.2-.9.3-.1 0-.1.1-.1.1s-.1 0-.1-.1 0-.2.1-.3c.2-.2.6-.5 1-.5h.2c.4.1.6.3.8.4.1.2.1.4 0 .6.1 0 .1 0 0 0zm-1-.7h.2c.3 0 .5.3.7.4 0-.1-.1-.2-.1-.3-.1-.2-.4-.3-.6-.3h-.1c-.4 0-.7.2-.9.4.1 0 .4-.2.8-.2z"
            />
          </g>
          <g>
            <path
              className="st2"
              d="M26.4 11.2c.6-.1 1.3.4 1.2.7 0 .1-.4-.4-1.2-.3-.4 0-.8.6-.8.5-.1-.1 0-.7.8-.9z"
            />
            <path
              className="st2"
              d="M25.6 12.2c-.1 0-.1 0 0 0-.1-.1-.1-.4.1-.6.1-.2.3-.4.8-.4h.2c.4 0 .9.3 1 .5.1.1.1.2.1.3 0 0 0 .1-.1.1 0 0-.1 0-.1-.1-.1-.1-.4-.3-.9-.3h-.2c-.2 0-.5.3-.6.4-.3 0-.3.1-.3.1zm.9-.9h-.1c-.3 0-.5.2-.6.3-.1.1-.1.2-.1.3.2-.2.4-.4.7-.4h.2c.5 0 .8.2.9.3-.2-.3-.6-.5-1-.5z"
            />
          </g>
          <g>
            <path
              className="st7"
              d="M20.5 7.6c-.6.2-2.2-.5-2.6-1.5-.9-2.1 1.4-2.9 2-1.8.7 1.1 1.2 3.1.6 3.3z"
            />
            <path
              className="st2"
              d="M18.9 7.3s-.1 0 0 0c-.6-.3-.9-.7-1.1-1.1-.2-.5-.3-1-.2-1.4.1-.4.4-.7.7-.8.3-.2.6-.2.9-.2.4 0 .6.2.8.4.3.5.6 1.2.8 1.9 0 .1 0 .1-.1.2-.1 0-.1 0-.2-.1-.1-.7-.4-1.4-.7-1.8-.3-.5-.9-.5-1.4-.2-.5.3-.9.9-.4 2 .2.4.5.7 1 1 .1 0 .1.1 0 .2 0-.1-.1-.1-.1-.1z"
            />
            <path
              className="st10"
              d="M19.8 6.7c-.3.1-1-.2-1.2-.7-.4-1 .6-1.3.9-.9.3.5.6 1.4.3 1.6z"
            />
          </g>
          <g>
            <path
              className="st7"
              d="M27.5 7.6c.6.2 2.2-.5 2.6-1.5.9-2.1-1.4-2.9-2-1.8-.7 1.1-1.2 3.1-.6 3.3z"
            />
            <path
              className="st2"
              d="M29.1 7.3s-.1 0-.1-.1V7c.5-.3.8-.6 1-1 .5-1 .1-1.7-.4-2-.4-.2-1.1-.2-1.4.2-.3.5-.6 1.2-.7 1.8 0 .1-.1.1-.2.1s-.1-.1-.1-.2c.1-.7.4-1.4.8-1.9.2-.3.4-.4.8-.5.3-.1.6 0 .9.2.3.2.6.5.7.8.1.4.1.9-.2 1.4-.1.7-.5 1.1-1.1 1.4.1 0 0 0 0 0z"
            />
            <path
              className="st10"
              d="M28.2 6.7c.3.1 1-.2 1.2-.7.4-1-.6-1.3-.9-.9-.3.5-.6 1.4-.3 1.6z"
            />
          </g>
          <g>
            <path
              className="st12"
              d="M25.5 5.6c-.1-.7-.6-4.9-1.5-4.9-.8 0-1.4 4.2-1.5 4.9h3z"
            />
            <ellipse className="st13" cx={24} cy={1.7} rx={0.2} ry={0.4} />
            <path
              className="st3"
              d="M22.5 5.5h3c0-.4-.2-1.8-.5-3l-2.1.6c-.2 1-.3 2.1-.4 2.4z"
            />
            <path
              className="st2"
              d="M25.5 5.6h-3-.1v-.1c0-.4.2-1.6.5-2.7.1-.7.3-1.2.5-1.6.2-.5.4-.8.7-.8.3 0 .5.2.7.8.2.4.3.9.5 1.6.2 1.2.4 2.4.4 2.7-.1 0-.1.1-.2.1.1 0 0 0 0 0zm-2.8-.2h2.7c-.1-.5-.2-1.6-.4-2.6-.1-.6-.3-1.2-.4-1.5-.2-.5-.4-.6-.5-.6-.1 0-.4.1-.9 2.1-.3 1-.5 2.1-.5 2.6z"
            />
            <path
              className="st2"
              d="M22.9 3.3c-.1 0-.1 0-.1-.1s0-.1.1-.2l2-.6c.1 0 .1 0 .2.1 0 .1 0 .1-.1.2l-2.1.6c.1 0 .1 0 0 0z"
            />
            <g>
              <path
                className="st3"
                d="M22.9 6.5c-.6.6-1.7.7-2.3.2-.6-.5-.6-1.4 0-2 .6-.6 2.5-1.4 3.1-.9.7.5-.2 2.1-.8 2.7z"
              />
              <path
                d="M22.4 4.6c-.2.1-.3.1-.3 0s0-.2.1-.3c.2-.1.4-.2.4-.1.1.1 0 .3-.2.4z"
                fill="#ffa4f9"
              />
              <path
                className="st8"
                d="M23.7 3.8c-.1-.1-.4-.2-.6-.1.2 0 .3 0 .4.1.5.4-.1 1.7-.7 2.2-.5.5-1.4.6-1.9.2-.5-.4-.5-1.1 0-1.6.2-.2.5-.4.9-.6-.5.2-1 .5-1.2.7-.6.6-.7 1.5 0 2 .6.5 1.7.4 2.3-.2.6-.6 1.5-2.2.8-2.7z"
              />
              <path
                className="st2"
                d="M21.6 7.2c-.4 0-.8-.1-1.1-.3-.3-.2-.5-.6-.5-1s.2-.9.5-1.2c.5-.5 1.8-1.1 2.7-1.1.3 0 .5.1.6.2.2 0 .3.2.3.5 0 .8-.6 1.9-1.1 2.3-.4.4-.9.6-1.4.6zm1.6-3.4c-.8 0-2 .6-2.5 1-.3.3-.5.6-.4 1 0 .3.2.6.4.8.2.2.6.3.9.3.5 0 .9-.2 1.2-.5.5-.5 1-1.5 1-2.1 0-.2-.1-.3-.2-.4-.1-.1-.2-.1-.4-.1z"
              />
            </g>
            <g>
              <path
                className="st12"
                d="M25.1 6.5c.6.6 1.7.7 2.3.2.6-.5.6-1.4 0-2-.6-.6-2.5-1.4-3.1-.9-.6.5.2 2.1.8 2.7z"
              />
              <path
                className="st13"
                d="M25.6 4.6c.2.1.3.1.3 0s0-.2-.1-.3c-.2-.1-.4-.2-.4-.1-.1.1 0 .3.2.4z"
              />
              <path
                className="st1"
                d="M24.3 3.8c.1-.1.4-.2.6-.1-.2 0-.3 0-.4.1-.5.4.1 1.7.7 2.2.5.5 1.4.6 1.9.2.5-.4.5-1.1 0-1.6-.2-.2-.5-.4-.9-.6.5.2 1 .5 1.2.7.6.6.7 1.5 0 2-.6.5-1.7.4-2.3-.2-.6-.6-1.4-2.2-.8-2.7z"
              />
              <path
                className="st2"
                d="M26.4 7.2c-.5 0-1-.2-1.4-.5-.5-.4-1.1-1.5-1.1-2.3 0-.3.1-.5.3-.6.2-.1.4-.2.6-.2.9 0 2.2.7 2.7 1.1.4.3.6.7.5 1.1 0 .4-.2.7-.5 1-.3.2-.7.4-1.1.4zm-1.6-3.4c-.2 0-.4 0-.5.1-.1.1-.2.2-.2.4 0 .6.5 1.6 1 2.1.3.3.8.5 1.2.5.4 0 .7-.1.9-.3.3-.2.4-.5.4-.8 0-.3-.1-.7-.4-1-.4-.4-1.6-1-2.4-1z"
              />
            </g>
            <g>
              <path
                className="st9"
                d="M25.6 6.4c0 .8-.7 1.5-1.6 1.5-.9 0-1.6-.7-1.6-1.5s.7-2.6 1.6-2.6c.9 0 1.6 1.8 1.6 2.6z"
              />
              <path
                className="st11"
                d="M24.2 4.8c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3 0-.2.1-.6.3-.6.1 0 .3.4.3.6z"
              />
              <path
                className="st5"
                d="M24 3.8c-.9 0-1.6 1.7-1.6 2.6 0 .8.7 1.5 1.6 1.5.9 0 1.6-.7 1.6-1.5s-.7-2.6-1.6-2.6zm0 3.3c-.7 0-1.2-.5-1.2-1.2 0-.6.5-2 1.2-2s1.2 1.3 1.2 2-.5 1.2-1.2 1.2z"
              />
              <path
                className="st2"
                d="M24 8c-.9 0-1.7-.7-1.7-1.6 0-.5.2-1.1.5-1.7.4-.7.8-1 1.2-1 .4 0 .9.4 1.2 1 .3.5.5 1.2.5 1.7 0 .9-.8 1.6-1.7 1.6zm0-4c-.3 0-.7.3-1 .9-.3.5-.4 1.1-.4 1.5 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.4-.2-1-.4-1.5-.3-.6-.7-.9-1-.9z"
              />
            </g>
          </g>
          <g>
            <ellipse
              transform="rotate(61.262 25.223 13.616)"
              className="st7"
              cx={25.2}
              cy={13.6}
              rx={0.4}
              ry={0.2}
            />
            <path
              className="st2"
              d="M25.5 14s-.2 0-.3-.3c-.2-.3 0-.5-.1-.5s-.2.3-.1.5c.1.3.4.4.5.3z"
            />
          </g>
          <g>
            <path
              className="st15"
              d="M15.8 14.2s-1.5-.8-.8-1.5c.4-.4.8.2.8.2s.4-.4.7.1c.4.5-.7 1.2-.7 1.2zM16.8 15.9s1-.6.6-1.1c-.3-.3-.6.1-.6.1s-.3-.3-.4.1c-.3.4.4.9.4.9z"
            />
          </g>
          <g>
            <path
              className="st15"
              d="M32.6 15.8s1.1-.5.7-1c-.2-.3-.6.1-.6.1s-.2-.3-.4 0c-.3.4.3.9.3.9z"
            />
          </g>
          <g>
            <circle className="st2" cx={16.6} cy={7.3} r={0.2} />
            <circle className="st2" cx={32.9} cy={7.6} r={0.2} />
            <circle className="st2" cx={26.6} cy={1.2} r={0.2} />
            <circle className="st2" cx={33.5} cy={18.7} r={0.2} />
            <circle className="st2" cx={33.5} cy={18.3} r={0.1} />
            <circle className="st2" cx={32.3} cy={7.4} r={0.1} />
            <circle className="st2" cx={16.8} cy={6.9} r={0.1} />
            <circle className="st2" cx={16.9} cy={19.8} r={0.1} />
            <circle className="st2" cx={13.6} cy={13.9} r={0.2} />
          </g>
          <g>
            <text
              transform="translate(30.335 20.775)"
              fontSize="17.9741px"
              fontFamily="Montserrat-Bold"
              fill="#f23030"
            >
              {"CandySwap"}
            </text>
          </g>
        </g>
      </switch>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);

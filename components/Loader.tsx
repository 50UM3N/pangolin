import React from "react";

interface props {}

const Loader: React.FC<props> = ({}) => {
    return (
        <div className="loading">
            <svg width="200" viewBox="-6 -6 181 53">
                <rect
                    className="cls-2"
                    x="64.35"
                    y="0.39"
                    width="43.45"
                    height="43.45"
                    rx="5.36"
                />
                <ellipse
                    className="cls-2"
                    cx="148.26"
                    cy="22.11"
                    rx="22.11"
                    ry="21.72"
                    transform="matrix(0.07, -1, 1, 0.07, 116, 168.5)"
                />
                <path
                    className="cls-2"
                    d="M43.83,44H4A4.08,4.08,0,0,1,.54,37.9L20.47,2.24a3.89,3.89,0,0,1,6.85,0L47.25,37.9A4.09,4.09,0,0,1,43.83,44Z"
                />
            </svg>
            <style jsx>
                {`
                    .loading {
                        width: 100%;
                        height: 100%;
                        background: hsla(185, 100%, 30%, 1);
                        background: linear-gradient(
                            135deg,
                            hsla(185, 100%, 30%, 1) 0%,
                            hsla(171, 99%, 28%, 1) 100%
                        );

                        background: -moz-linear-gradient(
                            135deg,
                            hsla(185, 100%, 30%, 1) 0%,
                            hsla(171, 99%, 28%, 1) 100%
                        );

                        background: -webkit-linear-gradient(
                            135deg,
                            hsla(185, 100%, 30%, 1) 0%,
                            hsla(171, 99%, 28%, 1) 100%
                        );
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .loading svg .cls-1,
                    .loading svg .cls-2 {
                        fill: none;
                        stroke-width: 6;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke: rgba(110, 123, 242, 0.3);
                    }
                    .loading svg .cls-1.cls-2,
                    .loading svg .cls-2.cls-2 {
                        stroke: white;
                        stroke-dasharray: 170;
                        stroke-dashoffset: 0;
                        animation: dash 3s ease-in-out;
                    }

                    @keyframes dash {
                        from {
                            stroke-dashoffset: 170;
                        }
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Loader;

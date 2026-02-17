"use client";
import Link from "next/link";

export default function EventTicker() {
    const items = [
        "Click here to check Live Match Updates",
        // "Hurry! On Spot Registration open till 11am",
    ];

    const repeated = Array(6).fill(items).flat();

        return (
                <div className="ticker">
                    <div className="track">
                        {repeated.map((text, i) => (
                            <span key={i} className="item"><Link href="/Leaderboard">{text}</Link></span> //for leaderboard
                            // <span key={i} className="item">{text}</span>
                        ))}
                    </div>
        
                    <style jsx>{`
                        .ticker {
                            width: 100%;
                            overflow: hidden;
                            background: #ececec;
                            border-top: 1px solid #d1d5db;
                            border-bottom: 1px solid #d1d5db;
                        }
        
                        .track {
                            display: flex;
                            width: max-content;
                            animation: move 22s linear infinite;
                        }
        
                        .item {
                            white-space: nowrap;
                            padding: 7px 48px;
                            font-size: 18px;
                            font-weight: 800;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                            color: #1c398e;
        
                            /* classy neon glow */
                            text-shadow:
                                0 0 3px rgba(28,57,142,0.45),
                                0 0 8px rgba(59,130,246,0.35),
                                0 0 16px rgba(96,165,250,0.25);
                        }
        
                        @keyframes move {
                            from { transform: translateX(0); }
                            to { transform: translateX(-50%); }
                        }
        
                        @media (max-width: 600px) {
                            .item {
                                font-size: 14px;
                                padding: 5px 28px;
                            }
        
                            .track {
                                animation-duration: 18s;
                            }
                        }
                        
                    `}</style>
                </div>
            );
        }
import { useEffect, useRef } from "react";

export default function AnimatedWave() {
    const shadowRef = useRef(null);
    const cyanRef = useRef(null);
    const blueRef = useRef(null);

    useEffect(() => {
        let tick = 0;
        let animationFrame;

        const animateWave = () => {
            let shadowPath = "";
            let cyanPath = "";
            let bluePath = "";

            const width = 1400;
            const centerY = 180;
            const points = 100;

            for (let i = 0; i <= points; i++) {
                const x = (i / points) * width;

                const volume = Math.sin(
                    (i / points) * Math.PI
                );

                const edge = Math.pow(volume, 0.4);

                const cyanY =
                    centerY +
                    (
                        Math.sin(i * 0.25 + tick * 0.04) * 60 +
                        Math.cos(i * 0.6 - tick * 0.06) * 120
                    ) *
                    edge;

                const shadowY =
                    centerY +
                    8 +
                    (
                        Math.sin(i * 0.25 + tick * 0.035) * 35 +
                        Math.cos(i * 0.6 - tick * 0.05) * 65
                    ) *
                    edge;

                const blueY =
                    centerY +
                    (
                        Math.sin(i * 0.18 - tick * 0.03) * 80 +
                        Math.cos(i * 0.5 + tick * 0.05) * 100
                    ) *
                    edge;

                cyanPath += `${i === 0 ? "M" : "L"
                    } ${x} ${cyanY}`;

                shadowPath += `${i === 0 ? "M" : "L"
                    } ${x} ${shadowY}`;

                bluePath += `${i === 0 ? "M" : "L"
                    } ${x} ${blueY}`;
            }

            shadowRef.current?.setAttribute(
                "d",
                shadowPath
            );

            cyanRef.current?.setAttribute(
                "d",
                cyanPath
            );

            blueRef.current?.setAttribute(
                "d",
                bluePath
            );

            tick++;
            animationFrame =
                requestAnimationFrame(animateWave);
        };

        animateWave();

        return () =>
            cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">

            {/* Frost Blur Layer */}
            <div
                className="
                absolute
                inset-0
                bg-white/[0.03]
                backdrop-blur-[80px]
                blur-[350px]
            "
            />

            {/* Center Cyan Glow */}
            <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[700px]
                h-[700px]
                rounded-full
                bg-cyan-400/15
                blur-[120px]
            "
            />

            {/* Left Ambient Glow */}
            <div
                className="
                absolute
                top-[-150px]
                left-[-100px]
                w-[500px]
                h-[500px]
                rounded-full
                bg-cyan-400/15
                blur-[180px]
            "
            />

            {/* Right Ambient Glow */}
            <div
                className="
                absolute
                bottom-[-200px]
                right-[-100px]
                w-[500px]
                h-[500px]
                rounded-full
                bg-purple-500/15
                blur-[180px]
            "
            />

            <svg
                viewBox="0 0 1400 400"
                preserveAspectRatio="none"
                className="
                absolute
                left-1/2
                top-[55%]
                w-[120%]
                h-[600px]
                -translate-x-1/2
                -translate-y-1/2
                opacity-35
                blur-[5px]
            "

            >
                <defs>

                    {/* Cyan Glow */}
                    <filter
                        id="glow-cyan"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                    >
                        <feGaussianBlur
                            stdDeviation="10"
                            result="blur1"
                        />

                        <feGaussianBlur stdDeviation="35" result="blur2" />

                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Blue Glow */}
                    <filter
                        id="glow-blue"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                    >
                        <feGaussianBlur
                            stdDeviation="8"
                            result="blur1"
                        />

                        <feGaussianBlur stdDeviation="30" result="blur2" />

                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Scatter Glow */}
                    <filter
                        id="glow-shadow"
                        x="-40%"
                        y="-40%"
                        width="180%"
                        height="180%"
                    >
                        <feGaussianBlur
                            stdDeviation="28"
                            result="scatterBlur"
                        />

                        <feMerge>
                            <feMergeNode in="scatterBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                </defs>

                <g filter="url(#glow-shadow)">
                    <path
                        ref={shadowRef}
                        fill="none"
                        stroke="rgba(125,211,252,.25)"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </g>

                <g filter="url(#glow-cyan)">
                    <path
                        ref={cyanRef}
                        fill="none"
                        stroke="#00f2ff"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </g>

                <g filter="url(#glow-blue)">
                    <path
                        ref={blueRef}
                        fill="none"
                        stroke="rgba(96,165,250,.85)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </g>

            </svg>

            <div className="absolute inset-0 bg-[#040814]/30" />

        </div>
    );
}
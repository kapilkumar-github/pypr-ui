"use client";

import { useEffect, useState } from "react";

export function DotBackground() {
    const [position, setPosition] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            {/* Base dots */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Very subtle cursor interaction */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    maskImage: `radial-gradient(
            circle 120px at ${position.x}px ${position.y}px,
            black 0%,
            transparent 100%
          )`,
                    WebkitMaskImage: `radial-gradient(
            circle 120px at ${position.x}px ${position.y}px,
            black 0%,
            transparent 100%
          )`,
                }}
            />
        </div>
    );
}
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    // normal mouse position
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });

    // makes the ring bigger when hovering
    const [active, setActive] = useState(false);

    useEffect(() => {
        const interactive = "a, button, .pf-card, .lightbox-close, .lightbox-overlay";

        const move = (e) => {
            const target = e.target.closest(interactive);

            //makes it so the circle has a slight pull toward hovered elements
            if (target) {
                const rect = target.getBoundingClientRect();

                mouse.current.x =
                    rect.left + rect.width / 2 + (e.clientX - (rect.left + rect.width / 2)) * 0.25;

                mouse.current.y =
                    rect.top + rect.height / 2 + (e.clientY - (rect.top + rect.height / 2)) * 0.25;
            } else {
                mouse.current.x = e.clientX;
                mouse.current.y = e.clientY;
            }

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const animate = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        const updateHover = (e) => {
            const interactive = "a, button, .pf-card, .lightbox-close, .lightbox-overlay";
            setActive(!!e.target.closest(interactive));
        };

        window.addEventListener("mousemove", move);
        document.addEventListener("mouseover", updateHover);

        const animation = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", updateHover);
            cancelAnimationFrame(animation);
        };
    }, []);

    return (
        <>
            <div ref={ringRef} className={`cursor-ring ${active ? "active" : ""}`} />
            <div ref={dotRef} className={`cursor-dot ${active ? "active" : ""}`} />
        </>
    );
}
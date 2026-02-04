import { useState, useEffect, useRef } from 'react';
import * as THREE from "three"; // Vanta suele necesitar Three.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import CLOUDS from 'vanta/dist/vanta.clouds.min';

function Landing() {
    const myRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                    el: myRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    sunlightColor: 0xff,
                    sunGlareColor: 0xa0c2bf,
                }),
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={myRef}>
            {/* <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                zIndex: 1
            }}>
                <h1>Birthday Games Hub</h1>
                <p>Una experiencia estética para tus juegos</p>
            </div> */}
        </div>
    );
}

export default Landing;

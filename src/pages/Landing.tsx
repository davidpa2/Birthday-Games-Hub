import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
                    sunlightColor: '0xffffff',
                    sunGlareColor: '0xffffff',
                }),
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={myRef} style={{ width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0' }}>
            {<div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                zIndex: 1
            }}>
                <div className="w-96 p-6 border-3 rounded-xl shadow-xs bg-gray-800/25">
                    <svg className="w-7 h-7 mb-3 flex-row mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                    </svg>

                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">Birthday Games Hub</h5>
                    </a>

                    <p className="mb-3">¡Bienvenido al portal de juegos de cumpleaños!</p>
                    <p className="mb-3">Todos los juegos sobre tartas hechos año tras año en un mismo lugar.</p>

                    <Link to={"/Games"}>
                        <a className="inline-flex font-medium items-center text-fg-brand hover:underline">
                            ¡A jugar!
                            <svg className="w-4 h-4 ms-2 rtl:rotate-270" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" /></svg>
                        </a>
                    </Link>
                </div>
            </div>
            }
        </div>
    );
}

export default Landing;

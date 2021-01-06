import React, { useLayoutEffect, useRef } from 'react'
import './Earth.css';

const Earth = () => {

    const aliceSprite = useRef();

    useLayoutEffect(() => {

        var spriteFrames = [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }
        ];

        var alice = aliceSprite.current.animate(
            spriteFrames, {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 500,
            playbackRate: 1,
            iterations: Infinity
        });

        setInterval(function () {
            if (alice.playbackRate > .4) {
                alice.playbackRate -= .1;
            }
        }, 3000);

        const moveFast = () => {
            alice.playbackRate += 0.1;
        }

        window.addEventListener("click", moveFast);

    })

    return (
        <div className="earth">
            <div className="alice">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt="Alice" className="alicesprite" ref={aliceSprite} />

            </div>

        </div>
    )
}

export default Earth;
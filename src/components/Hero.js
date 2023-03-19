import { useEffect, useRef } from "react";
import Lottie from 'lottie-web';
const animationData = require('../assets/hero-rocket.json');

const Hero = () => {
    const roContainer = useRef(null);

    useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: roContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        });

        return () => {
            anim.destroy();
        };
    }, []);
    return (
        <div className="w-full h-[60vh] bg-secondary flex justify-center items-center">
            <div className="w-full max-w-5xl text-semiwhite flex items-center px-2 ">
                <div className="w-1/2 space-y-4">
                    <div className="flex items-end font-semibold">
                        <h1 className="text-4xl">Space</h1>
                        <span className="text-5xl text-primary inline-block transform skew-y-6 ">Z</span>
                        
                    </div>
                    <div>
                        <p className="text-lg">Welcome to SpaceZ, your ultimate destination for all things space exploration! Here, you can find detailed information about SpaceX rockets and capsules, including launch dates, mission details, and more. Join us on a journey to discover the mysteries of the universe and learn about the groundbreaking technology that makes it all possible. Explore the stars with SpaceZ!</p>
                    </div>
                    <div className="">
                        <button className="bg-primary text-white px-5 py-1 text-lg hover:bg-white hover:text-black">Explore Now</button>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="max-w-sm w-full block h-full" ref={roContainer} key="hero-rocket-animation">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero

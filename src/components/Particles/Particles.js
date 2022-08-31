import './Particles.css';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {

    const options = useMemo(() => {
        return {
            particles: {
                move: {
                    enable: true,
                    speed: {min: 1, max: 3}
                },
                links: {
                    enable: true,
                    opacity: 0.5
                },
                size: {
                    value: {min: 1, max: 3}
                },
                opacity: {
                    value: {min: 0.3, max: 0.7}
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    repulse: {
                        distance: 100
                    }
                }
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return(
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
    
}

export default ParticlesComponent;
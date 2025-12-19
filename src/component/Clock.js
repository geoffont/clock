import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return (
        <div className="space-container">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>

            <div className="nebula nebula1"></div>
            <div className="nebula nebula2"></div>
            <div className="nebula nebula3"></div>

            <div className="planet planet1"></div>
            <div className="planet planet2"></div>
            <div className="planet planet3"></div>
            <div className="planet planet4"></div>

            <div className="galaxy"></div>

            <div className="clock-wrapper">
                <div className="clock-glow"></div>
                <div className="clock-frame">
                    <div className="clock-display">
                        <div className="time-segment">
                            <span className="time-value">{hours}</span>
                            <span className="time-label">HOURS</span>
                        </div>
                        <span className="time-separator">:</span>
                        <div className="time-segment">
                            <span className="time-value">{minutes}</span>
                            <span className="time-label">MINUTES</span>
                        </div>
                        <span className="time-separator">:</span>
                        <div className="time-segment">
                            <span className="time-value">{seconds}</span>
                            <span className="time-label">SECONDS</span>
                        </div>
                    </div>
                    <div className="clock-decorations">
                        <div className="corner corner-tl"></div>
                        <div className="corner corner-tr"></div>
                        <div className="corner corner-bl"></div>
                        <div className="corner corner-br"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clock;

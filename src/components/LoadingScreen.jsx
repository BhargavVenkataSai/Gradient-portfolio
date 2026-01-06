import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete, exitAfterMs = 6800 }) => {
  const phrases = ['RAM OK', 'CPU OK', 'GPU OK', 'LOADING...'];
  const typingSpeed = 100; // ms per character
  const holdDelay = 700;   // ms to hold the full word before transition
  const fadeDuration = 250; // ms

  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Typewriter loop: type, hold, fade, switch phrase
  useEffect(() => {
    if (isExiting) return;

    const current = phrases[phraseIndex];
    let t;

    if (charIndex < current.length) {
      t = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
    } else {
      t = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsFading(false);
          setCharIndex(0);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }, fadeDuration);
      }, holdDelay);
    }

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, phraseIndex, isExiting]);

  // Auto-exit after a short time; parent will hide the screen
  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 400);
    }, exitAfterMs);

    return () => clearTimeout(exitTimer);
  }, [exitAfterMs, onLoadingComplete]);

  if (!isVisible) return null;

  const displayed = phrases[phraseIndex].slice(0, charIndex);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-400 overflow-hidden ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ margin: 0, padding: 0 }}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines" />

      {/* CRT flicker effect */}
      <div className="absolute inset-0 pointer-events-none crt-flicker" />

      {/* Typing text */}
      <div className="text-center font-mono">
        <div className={`boot-text ${isFading ? 'fade-out' : ''}`}>
          <span className="text-glow">{displayed}</span>
          {/* Cursor */}
          <span className="cursor-blink inline-block align-baseline ml-2 w-4 h-7 bg-cyan-400" />
        </div>
      </div>

      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        .boot-text {
          font-family: 'Share Tech Mono', 'Courier New', monospace;
          font-size: clamp(2rem, 8vw, 5rem);
          font-weight: bold;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          transition: opacity ${fadeDuration}ms ease, transform ${fadeDuration}ms ease;
          will-change: opacity, transform;
        }

        .fade-out {
          opacity: 0.85;
          transform: translateY(2px);
        }

        .text-glow {
          color: #7fffd4;
          text-shadow:
            0 0 5px #7fffd4,
            0 0 10px #7fffd4,
            0 0 20px #40ffaa,
            0 0 40px #40ffaa,
            0 0 60px #00ffcc;
          animation: glitchFlicker 3s infinite;
        }

        @keyframes glitchFlicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.88; transform: translateX(-1px); }
          94% { opacity: 1; transform: translateX(0); }
          96% { opacity: 0.92; transform: translateX(1px); }
          97% { opacity: 1; transform: translateX(0); }
        }

        .cursor-blink {
          animation: blink 0.8s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .scanlines {
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
        }

        .crt-flicker {
          animation: crtFlicker 0.15s infinite;
          background: rgba(18, 16, 16, 0);
        }

        @keyframes crtFlicker {
          0% { background: rgba(18, 16, 16, 0); }
          50% { background: rgba(18, 16, 16, 0.02); }
          100% { background: rgba(18, 16, 16, 0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

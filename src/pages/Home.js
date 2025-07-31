import { useEffect } from 'react';
import './Home.css';

const NAME = "Omar Albek";

function Home() {
  useEffect(() => {
    // منع السكرول عند الدخول
    document.body.style.overflow = 'hidden';
    return () => {
      // إعادة تفعيل السكرول عند الخروج
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const words = ["مرحباً..", "Hello..", "Bonjour..", "Hola..", "Ciao..","Cześć.."];
    const typedText = document.getElementById("typed-text");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex--);
      } else {
        typedText.textContent = currentWord.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    type();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-page">
        <div className="home-content">
          {/* الاسم */}
          <h1 className="name">
            {NAME.split("").map((char, index) => (
              <span
                key={index}
                className="char"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* الكارد الزجاجية */}
          <div className="center-card">
            {/* الترحيب */}
            <div className="typewriter">
              <span id="typed-text"></span>
              <span className="cursor">|</span>
            </div>

            {/* النص التعريفي + التوقيع */}
            <div className="card-text">
              <p className="fade-in">
                I'm Omar Albek, a visual designer with a passion for graphic design, video editing, and motion graphics. My journey began during the early days of YouTube, where I discovered my love for content creation and visual storytelling. Over the years, this passion has grown into a professional path focused on creating impactful content for social media.
              </p>
              <p className="fade-in" style={{ animationDelay: "0.4s" }}>
                Alongside my creative work, I’m currently studying Computer Engineering and specializing in web and front-end design.
              </p>

              {/* التوقيع داخل الكارد */}
              <div className="signature-container">
                <video
                  className="signature-video"
                  src="/SigMotion.webm"
                  autoPlay
                  muted
                  playsInline
                  onEnded={(e) => e.target.pause()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

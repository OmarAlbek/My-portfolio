// src/pages/Cv.js
import React from 'react';
import './Cv.css';

function Cv() {
  return (
    <div className="cv-page">
      <div className="cv-container">
        <h1 className="cv-title">
  {"Curriculum Vitae".split('').map((char, index) => (
    <span
      key={index}
      className="cv-char"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))}
</h1>

        {/* Profile */}
        {/* About Me */}
<div className="cv-card fade-scale">
  <h2>About Me</h2>
  <p>
    I’m Omar Albek, a 24-year-old designer based in Damascus. I specialize in creating social media content, including product advertising and marketing visuals that enhance brand identity and audience engagement.
  </p>
</div>
        <div className="cv-card fade-scale">
          <h2>Profile</h2>
          <p>
            I'm a graphic designer with four years of experience in design, video editing, and motion graphics. Currently studying Information Technology Engineering, I combine creativity with technical skills to deliver impactful and innovative visual content.
          </p>
        </div>

        {/* Experience */}
        <div className="cv-card fade-scale">
          <h2>Professional Experience</h2>

          <div className="cv-job fade-scale">
            <h3>Sky Agency</h3>
            <p><strong>Motion Graphics & Designer (05/2025 – Present)</strong></p>
            <p>
              <li>Integrated motion graphics into client solutions and contributed to various
social media campaigns in the food industry. Focused on creating visually
appealing animations to present food products in an engaging and
appetizing way, ensuring the content aligned with the brand’s visual
identity and effectively captured the attention of the target audience.</li>
            </p>
            <p>
              <li>Currently responsible for creating social media posters and editing
promotional video shoots for well-known local food companies. I handle
the end-to-end design process, ensuring that visual content resonates with
each brand's identity and marketing goals. My work includes designing
visually compelling graphics and videos optimized for different social media
platforms, contributing to consistent brand engagement and visibility.</li>
            </p>
          </div>
          <hr className="cv-divider" />

          <div className="cv-job fade-scale">
            <h3>Wissam Productions Agency</h3>
            <p><strong>Graphic Designer & Motion Graphics (2023 – 2025)</strong></p>
            <p>
                <li>I integrated motion graphics into the solutions provided to clients and
contributed to various social media projects in fields such as nutrition and
bags. My work focused on creating engaging motion graphics to showcase
products in the most visually appealing and effective manner.</li>
            </p>
            <p>
              <li>I designed various visual content and managed video editing for client
accounts across multiple industries, including jewelry, veterinary medicine,
bags, food, pet care, food machinery manufacturing, and technology. I
transformed clients' visions and ideas into tangible designs, ensuring highquality
content that aligned with their brand identity and specific needs.
This involved creating engaging graphics and videos tailored to each client's
industry and objectives.</li>
            </p>
          </div>
          <hr className="cv-divider" />

          <div className="cv-job fade-scale">
            <h3>Go Smart – Kuwait</h3>
            <p><strong>Social Media Designer (2024 – 2025)</strong></p>
            <p>
              Go Smart is a Kuwaiti company specializing in selling computer components
and other technological products. As a content designer, I handle all the
necessary design work for the company’s accounts, including creating posts
and videos to effectively showcase and promote their products.
            </p>
          </div>
          <hr className="cv-divider" />

          <div className="cv-job fade-scale">
            <h3>Al-Marfoo Virtual School</h3>
            <p><strong>Graphic designer, Video maker (2024 – Present)</strong></p>
            <p>
              Al-Marfoo School is a Syrian virtual school that offers the Syrian curriculum to
students outside Syria through an online platform. I am responsible for
designing social media content and managing all the school’s design needs,
including documents, cards, and printed materials.
            </p>
          </div>
          <hr className="cv-divider" />

          <div className="cv-job fade-scale">
            <h3>Horan Clinic</h3>
            <p><strong>Social Media Designer (2024 – Present)</strong></p>
            <p>
Dr. Horan is a urologist who publishes important articles and information
related to his field. I have transformed these articles into infographic designs
for social media.
            </p>
          </div>
          <hr className="cv-divider" />

          <div className="cv-job fade-scale">
            <h3>Freelance Work (2020 – Present)</h3>
            <p>
                <li>I have provided logo and visual identity design services for many accounts in
the gaming and streaming sector.</li>
            </p>
            <p>
              <li>I have also worked on fulfilling social media page needs, including images
and banners for social media.</li>
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="cv-card fade-scale">
          <h2>Education</h2>
          <p><strong>Information Technology Engineering</strong> – Syrian Virtual University (2019 – Present)</p>
        </div>

        {/* Skills */}
<div className="cv-card fade-scale">
  <h2>Skills & Tools</h2>
  <div className="skills-grid">
    <div className="skill-bar">
      <span className="skill-label">Photoshop</span>
      <p>I leverage Photoshop to bring creative visions to life through sophisticated photomanipulation and refined image editing, producing professional-grade visual designs.</p>
    </div>
    <div className="skill-bar">
      <span className="skill-label">Illustrator</span>
      <p>I leverage Adobe Illustrator to design and manipulate precise, scalable vector shapes—ranging from logos and branding elements to raw motion-graphics assets—ensuring clean, professional results.</p>
    </div>
    <div className="skill-bar">
      <span className="skill-label">After Effects</span>
      <p>I leverage Adobe After Effects to craft professional motion graphics and VFX, from dynamic title animations and seamless compositing to particle simulations and cinematic visual effects.</p>
    </div>
    <div className="skill-bar">
      <span className="skill-label">Premiere Pro</span>
      <p>I leverage Adobe Premiere Pro to edit and assemble high-quality video content, applying advanced trimming, color grading, audio mixing, and seamless transitions to deliver polished, broadcast-ready productions.</p>
    </div>
    <div className="skill-bar">
      <span className="skill-label">Canva</span>
      <p>I leverage Canva when simplicity is key, using its intuitive drag-and-drop tools to swiftly create social media graphics, presentations, flyers, infographics, and basic animations.</p>
    </div>
    <div className="skill-bar">
      <span className="skill-label">React</span>
      <p>I leverage React’s component-based architecture and hooks to build scalable, interactive web applications—powering everything from my university projects to the very website you’re browsing now.</p>
    </div>
    <div className="skill-bar">
      <span className="skill-label">Flutter</span>
      <p>I leverage Flutter’s unified UI toolkit to develop cross-platform mobile applications for my academic projects, enabling rapid prototyping and seamless native-like performance on both iOS and Android.</p>
    </div>
  </div>
</div>

        {/* Languages */}
<div className="cv-card fade-scale">
  <h2>Languages</h2>
  <div className="language-block">
    <div className="language-entry">
      <h3>Arabic</h3>
      <p>Native</p>
    </div>
    <hr className="cv-divider" />
    <div className="language-entry">
      <h3>English</h3>
      <p>Professional Working Proficiency</p>
    </div>
  </div>
</div>
{/* Download CV Button */}
<div className="cv-download">
  <a
    href="/Omar%20H.%20Albek%20CV.pdf"
    download
    className="download-button fade-in-btn"
  >
    Download CV
  </a>
</div>

      </div>
      
    </div>
  );
}

export default Cv;

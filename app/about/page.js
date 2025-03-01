// app/about/page.js
"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section className="about-section">
        <div className="about-overlay">
          <h2>About Me</h2>
          <p>
            Ever since I was introduced to programming, I have been fascinated by how technology can bring ideas to life.
            I am a <b>**Computer Science Engineer**</b> who thrives on solving complex problems and building intuitive digital experiences.
          </p>
          <p>
            My expertise lies in <b>**Frontend and Full-Stack Development**</b>, with a strong foundation in **React.js, Next.js, JavaScript, HTML, and CSS**.
            I love transforming concepts into interactive, user-friendly applications that make a difference.
          </p>
          <p>
            Beyond coding, I am passionate about **continuous learning and innovation**. I have a keen interest in <b>**Data Analytics and Machine Learning**,</b>  working with
            libraries like **Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn** to analyze
            data and build intelligent models. Exploring real-world datasets and deriving insights
            is something I truly enjoy.
          </p>
          <p>
            My goal is to **become a skilled software engineer**, working on impactful projects that enhance user experiences and optimize business solutions.
            Whether it's <b>**frontend magic or backend logic**</b>, I enjoy every step of the process and embrace challenges as opportunities to grow.
          </p>
        </div>
      </section>
    </div>
  );
}

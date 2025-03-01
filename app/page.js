"use client";
import Image from "next/image";
import Link from "next/link";
import React,{ useEffect, useRef } from "react";

import Typed from "typed.js";




export default function Home() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    
    const options = {
      strings: ["I am a passionate Full Stack Developer"],
      typeSpeed: 50,
      
    };

    
    const typed = new Typed(typedElementRef.current, options);

    
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <>
       
      
      <main>
      
        <section className="firstsection">
          <div className="leftsection">
            <div>Hi, My name is <span className="purple">Gyaneshwar</span></div>
            <span ref={typedElementRef}></span> 
            <div className="buttons">
              <a href="./CVResumewb2.pdf" download>
                <button className="btn">Download Resume</button>
              </a>
              <a href="https://github.com/gyaneshwar57">
                <button className="btn">Visit GitHub</button>
              </a>
            </div>
          </div>
          <div className="rightsection">
            <Image src="/dev.webp" alt="Developer" width={500} height={500} />
          </div>
        </section>
        
        <hr />

        <div className="secondsection">
          <h1>Skills</h1>
          
          <div className="box">
            <div className="vertical">
              <Image className="image-top" src="/developer.png" alt="Frontend Technologies" width={40} height={40} />
                <div className="vertical-title"><b>Frontend Technologies</b></div>
                <div className="vertical-desc">HTML CSS JavaScript ReactJs</div>
            </div>
            <div className="vertical">
              <Image className="image-top" src="/developer.png" alt="" width={40} height={40} />
              <div className="vertical-title"><b>Backend Technologies</b></div>
              <div className="vertical-desc">ExpressJs NodeJs</div>
            </div>
            
            <div className="vertical">
              <Image className="image-top" src="/developer.png" alt="" width={40} height={40} />
              <div className="vertical-title"><b>Programming Languages</b></div>
              <div className="vertical-desc">C<br />C++<br />Python<br/>Java</div>
            </div>

            <div className="vertical">
              <Image className="image-top" src="/developer.png" alt="" width={40} height={40} />
              <div className="vertical-title"><b>Database Technologies</b></div>
              <div className="vertical-desc">SQL<br/>MongoDB</div>
            </div>
            <div className="vertical">
              <Image className="image-top" src="/developer.png" alt="" width={40} height={40} />
              <div className="vertical-title"><b>Other Technologies</b></div>
              <div className="vertical-desc">RESTful API<br/>Git<br />OOPs</div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Gyaneshwar's Portfolio</h3>
          </div>
          
        </div>
        <div className="footer-right">
          &copy; {new Date().getFullYear()} Gyaneshwar's Portfolio | All rights reserved
        </div>
      </footer>

      
    </>
  );
}

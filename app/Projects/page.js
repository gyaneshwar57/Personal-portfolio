import Link from "next/link";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-container">

        {/* E-Commerce Website */}
        <div className="project-card">
          <h2>E-Commerce Website (MERN Stack)</h2>
          <p>
            A fully functional e-commerce platform built using MongoDB, Express.js, React.js, and Node.js (MERN). 
            The platform supports user authentication, product management, payment gateway integration, and an admin dashboard 
            for managing orders and inventory. It provides a seamless shopping experience with features like product filtering, 
            search, and user reviews.
          </p>
        </div>

        {/* Personal Portfolio */}
        <div className="project-card">
          <h2>Personal Portfolio (React & Next.js)</h2>
          <p>
            A professional and responsive portfolio website developed using React.js and Next.js, showcasing my skills, 
            projects, and experience. The portfolio features dynamic animations, smooth page transitions, a contact form, 
            and an interactive resume section. It is designed with performance and SEO optimization in mind, ensuring fast loading times.
          </p>
        </div>

        {/* JavaScript Mini Projects */}
        <div className="project-card">
          <h2>JavaScript Mini Projects</h2>
          <p>Developed multiple JavaScript-based projects to enhance my programming skills:</p>
          <ul>
            <li>🔹 <b>BMI Calculator</b> – A simple tool to calculate Body Mass Index based on user input.</li>
            <li>🔹 <b>Color Changer</b> – A fun project allowing users to change background colors dynamically.</li>
            <li>🔹 <b>Clock</b> – A real-time digital clock displaying current time.</li>
          </ul>
        </div>

        {/* React.js Projects */}
        <div className="project-card">
          <h2>React.js Projects</h2>
          <p>Built several React.js projects to deepen my understanding of state management and component-based development:</p>
          <ul>
            <li>🔹 <b>To-Do List (Redux Toolkit)</b> – A task management app using Redux for state management.</li>
            <li>🔹 <b>Currency Converter</b> – A web application that converts currencies using real-time exchange rates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;

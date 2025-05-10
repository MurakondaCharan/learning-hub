import React from 'react';
import './Home.css'; // Make sure this file includes the testimonial CSS

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h1>Learning Hub</h1>
          </div>
          <nav className="navbar-links">
            <a href="/">Home</a>
            <a href="/courses">Courses</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
            <a href="/signup" className="signup-btn">Sign Up</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Empower Your Learning Journey</h2>
          <p>Explore a world of knowledge with our expertly crafted courses to enhance your skills and achieve your goals.</p>
          <div className="hero-buttons">
            <button className="get-started-btn">Get Started</button>
            <button className="explore-btn">Explore Courses</button>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <div className="courses-header">
          <h2>Featured Courses</h2>
          <p>Explore some of our most popular courses designed to help you excel.</p>
        </div>
        <div className="courses-container">
          <div className="course-card">
            <img src="https://via.placeholder.com/300" alt="Course 1" />
            <h3>Course 1</h3>
            <p>Short course description.</p>
          </div>
          <div className="course-card">
            <img src="https://via.placeholder.com/300" alt="Course 2" />
            <h3>Course 2</h3>
            <p>Short course description.</p>
          </div>
          <div className="course-card">
            <img src="https://via.placeholder.com/300" alt="Course 3" />
            <h3>Course 3</h3>
            <p>Short course description.</p>
          </div>
        </div>
        <div className="view-all-btn">
          <button>View All Courses</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-header">
          <h2>What Our Students Say</h2>
          <p>Hear from our community of learners who have transformed their careers and lives through our courses.</p>
        </div>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <h3>Sarah Johnson</h3>
            <span>Web Developer</span>
            <p>
              "The Web Development Bootcamp completely changed my career path. I went from knowing nothing about coding
              to landing a job as a junior developer in just 6 months. The instructors are amazing and the community
              support is incredible."
            </p>
            <div className="stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <h3>Michael Chen</h3>
            <span>Data Analyst</span>
            <p>
              "The Data Science course provided me with practical skills I could immediately apply in my job. The
              projects were challenging but rewarding, and I've since received a promotion thanks to my new skills."
            </p>
            <div className="stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <h3>Emily Rodriguez</h3>
            <span>Marketing Specialist</span>
            <p>
              "I was struggling to keep up with the rapidly changing digital marketing landscape until I found Learning
              Hub. The Digital Marketing course was comprehensive and up-to-date with the latest trends and tools."
            </p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Learning Hub</h3>
            <p>Empowering learners worldwide with high-quality education and skills for the future.</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-center">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Instructors</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <h4>Course Categories</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Mobile Development</a></li>
            </ul>
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates on courses, events, and special offers.</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Learning Hub. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

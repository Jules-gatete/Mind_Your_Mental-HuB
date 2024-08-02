import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import image from '../assets/land1.jpeg';
import image1 from '../assets/land2.jpg';
import back from '../assets/back.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen no-underline">
      {/* Navigation Bar */}
      <nav className="bg-white bg-opacity-70 backdrop-blur-md shadow-md fixed w-full z-10 transition duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="left-0 h-10 w-fit mr-2" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition duration-300 text-sm font-medium no-underline"
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 shadow-md no-underline"
              >
                Get Started
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md border-t border-gray-200">
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300 text-sm font-medium no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/login"
                className="mt-4 block w-full bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 shadow-md text-center no-underline"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Header */}
        <style>
          {`
            @keyframes slideBackground {
              0% {
                background-image: url(${image});
              }
              50% {
                background-image: url(${image1});
              }
              100% {
                background-image: url(${image});
              }
            }
            .bg-slide {
              animation: slideBackground 10s infinite;
            }
          `}
        </style>
        <header className="bg-slide bg-cover bg-center h-screen flex items-center justify-center">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-bold mb-4 text-white">Mind Your Mental Hub</h1>
            <h3 className="text-3xl text-white">
              Empowering youth to prioritize mental health and wellness through community, resources, and expert support.
            </h3>
            <div className="mt-16 flex justify-center">
              <Link
                to="/login"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md no-underline"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

        {/* How It Works */}
        <section id="how-it-works" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="flex flex-wrap justify-around">
            {['Sign Up', 'Explore', 'Engage'].map((step, index) => (
              <div key={step} className="w-full md:w-1/3 text-center px-4 mb-8">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && 'Create an account to access all features of the platform.'}
                  {index === 1 && 'Browse resources, join support groups, and book counseling sessions.'}
                  {index === 2 && 'Connect with the community, share experiences, and improve your mental well-being.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}

 <section id="features" className="bg-blue-100 py-16 bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center  text-white">Key Features</h2>
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { name: 'Mental Health Resources', icon: 'fa-brain' },
        { name: 'Support Groups', icon: 'fa-users' },
        { name: 'Counseling Sessions', icon: 'fa-calendar-check' },
        { name: 'Community Engagement', icon: 'fa-handshake' }
      ].map(({ name, icon }) => (
        <div key={name} className="bg-opacity-50 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <i className={`fa-solid ${icon} text-blue-500 text-3xl mr-4`}></i>
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>
          <p className="text-white ">
            {name === 'Mental Health Resources' && 'Access a wide range of educational materials to improve your mental health.'}
            {name === 'Support Groups' && 'Connect with peers facing similar challenges in a safe, supportive environment.'}
            {name === 'Counseling Sessions' && 'Book one-on-one sessions with licensed mental health professionals.'}
            {name === 'Community Engagement' && 'Share experiences, offer support, and build meaningful connections.'}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* User Testimonials */}
        <section id="testimonials" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">User Testimonials</h2>
          <div className="flex flex-wrap justify-around p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            {[
              { name: 'Jean', quote: 'MYM Hub helped me understand my emotions and find support when I needed it most.' },
              { name: 'Marie', quote: 'The counseling sessions have been life-changing. I feel heard and supported.' },
              { name: 'Emmanuel', quote: 'The community here is amazing. I\'ve made friends who truly understand me.' },
              { name: 'Aline', quote: 'I found the resources and support I needed to improve my mental health.' },
              { name: 'Claude', quote: 'The platform is easy to use and has been incredibly helpful.' },
              { name: 'Samantha', quote: 'Connecting with others who share my experiences has been a game changer.' },
              { name: 'Yves', quote: 'I feel more in control of my mental health journey thanks to MYM Hub.' }
            ].map((testimonial) => (
 <div key={testimonial.name} className="w-full md:w-1/3 p-4  animation: slide-out-right 0.5s forwards">                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic mb-4 text-gray-600">"{testimonial.quote}"</p>
                  <p className="font-semibold text-blue-600">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Us */}
        <section id="about-us" className="bg-blue-100 py-16 bg-cover bg-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-black-600 mb-8 text-center">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">To promote mental health awareness and provide accessible support for the young generations.</p>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">A society where every young person has the tools and support to thrive mentally and emotionally.</p>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                <p className="text-gray-600">MYM Hub addresses the issue of young people who are unaware of where to seek mental health support, feel it is stigmatized, do not realize they need it, or think it is too expensive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is MYM Hub free to use?',
                a: 'Yes, basic features are free. Premium services like one-on-one counseling may have additional costs.'
              },
              {
                q: 'How is my privacy protected?',
                a: 'We use advanced encryption and strict privacy policies to ensure your data and conversations remain confidential.'
              },
              {
                q: 'Can I use MYM Hub anonymously?',
                a: 'Yes, you can use a pseudonym for community features. However, verified information is required for counseling sessions.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-blue-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Get in Touch */}
<section id="contact" className="bg-gray-200 py-16">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
    <div className="flex flex-wrap justify-around">
      {[
        { method: 'Send us a message', icon: 'fas fa-envelope' },
        { method: 'Emergency support', icon: 'fas fa-phone-alt' },
        { method: 'Follow us', icon: 'fas fa-share-alt' }
      ].map((item, index) => (
        <div key={item.method} className="w-full md:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              <i className={`${item.icon} text-black`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">{item.method}</h3>
            <p className="text-gray-600">
              {index === 0 && 'Use our contact form for general inquiries or feedback.'}
              {index === 1 && 'Call our 24/7 helpline for immediate assistance.'}
              {index === 2 && (
                <>
                  {'Stay updated on social media for the latest news and resources. '}
                 <div>
                   <a href="#" className="text-black hover:opacity-80 ml-2">
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-black hover:opacity-80 ml-2">
                    <i className="fab fa-twitter"></i>
                    </a>
                   <a href="#" className="text-black hover:opacity-80 ml-2">
                    <i className="fab fa-instagram"></i>
                   </a>
                  </div>
                </>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-8 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Join Our Community Today</h2>
            <p className="text-xl mb-8">Take the first step towards better mental health. Sign up now and start your journey with MYM Hub.</p>
            <Link
              to="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg no-underline"
            >
              Create Account
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

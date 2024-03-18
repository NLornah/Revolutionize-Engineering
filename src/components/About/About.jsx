import React, { useState } from 'react';
import AboutImage from '../../assets/div.image-holder.png';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('tab-content-1');
  const [isHovered, setIsHovered] = useState(null);

  const handleTabHover = (tabId) => {
    setIsHovered(tabId);
  };

  const handleTabLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header bg-[#166691] text-white py-4" style={{ height: '250px' }}>
        <div className="container mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center">About Revolutionize Engineering</h1>
          <p className="text-lg text-center">Explore our mission, vision, and more.</p>
        </div>
      </div>

      {/* About Content */}
      <div className="about bg-white py-12  ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={AboutImage}
              alt="About Football Academy"
              className="about-img h-64 lg:h-auto object-cover object-center ml-16 rounded-md"
            />
          </div>
          <div className="lg:w-1/2 lg:ml-10">
            <div className="section-header mb-12 ml-4">
              <p className="text-[#27AAE1] mb-8">About Our Company</p>
              <h2 className="text-4xl font-bold text-gray-800">Revolutionize Engineering: Top Talent Acquisition Pipeline and Student Community in Africa.</h2>
            </div>
            <div className="about-tab">
              <ul
                className="nav nav-pills nav-justified mb-4"
                onMouseLeave={handleTabLeave}
              >
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'tab-content-1' ? 'active' : ''}`}
                    onMouseEnter={() => handleTabHover('tab-content-1')}
                    onClick={() => setActiveTab('tab-content-1')}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'tab-content-2' ? 'active' : ''}`}
                    onMouseEnter={() => handleTabHover('tab-content-2')}
                    onClick={() => setActiveTab('tab-content-2')}
                  >
                    Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'tab-content-3' ? 'active' : ''}`}
                    onMouseEnter={() => handleTabHover('tab-content-3')}
                    onClick={() => setActiveTab('tab-content-3')}
                  >
                    Vision
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  id="tab-content-1"
                  className={`container tab-pane ${activeTab === 'tab-content-1' || isHovered === 'tab-content-1' ? 'active' : 'fade'}`}
                >
                  Revolutionize Engineering is a transformative one-year project, with a goal of establishing a community of
                  10,000 passionate engineering students in Africa, particularly in Kenya, focusing on emerging Fourth Industrial
                  Revolution (4IR) technologies. The project team has developed a sustainable, long-term training strategy that
                  focuses on building the practical skills needed in the IT sector. The training, hackathons and Makerthons are
                  industry-led and open to Kenyan university and TVET students.
                </div>
                <div
                  id="tab-content-2"
                  className={`container tab-pane ${activeTab === 'tab-content-2' || isHovered === 'tab-content-2' ? 'active' : 'fade'}`}
                >
                  Establishing a community of over
                  10,000 passionate engineering students in Africa, particularly in Kenya, focusing on emerging Fourth Industrial
                  Revolution (4IR) technologies.
                </div>
                <div
                  id="tab-content-3"
                  className={`container tab-pane ${activeTab === 'tab-content-3' || isHovered === 'tab-content-3' ? 'active' : 'fade'}`}
                >
                  Evolutionize Engineering advocates for the pivotal role of
                  emerging technologies in Africa's future, recognizing the continent's critical juncture in navigating the Fourth
                  Industrial Revolution
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;






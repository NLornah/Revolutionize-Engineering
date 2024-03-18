// CategorySection.js
import React from 'react';
import './categories.css'
import Category1 from '../assets/category-1.svg'
import Category2 from '../assets/category-2.svg'
import Category3 from '../assets/category-3.svg'
import Category4 from '../assets/category-4.svg'

const Categories = () => {
  return (
    <section className="section category items-center mb-8 " aria-label="category">


      <div className="container flex flex-col items-center mt-12">

        <p className="text-xl font-bold text-gray-800">Categories</p>

        <h2 className="text-3xl font-bold text-blue-600 text-center mt-4">
          Online <span className="text-yellow-500">Some of our Fourth</span>  Industrial Revolution technologies
        </h2>

        {/* <p className="text-gray-600 text-center mt-4">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p> */}

        <ul className="grid-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          <li>
            <div className="category-card bg-[#E8F7F5]" style={{ "--color": "170, 75%, 41%" }}>

              <div className="card-icon">
                <img  src= { Category1 }  width="40" height="40" loading="lazy"
                  alt="Online Degree Programs" className="img" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">Artificial Intelligence</a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span className="card-badge">7 Courses</span>

            </div>
          </li>

          <li>
            <div className="category-card bg-[#FDECEF]" style={{ "--color": "351, 83%, 61%" }}>

              <div className="card-icon">
                <img src= { Category2 }  width="40" height="40" loading="lazy"
                  alt="Non-Degree Programs" className="img" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">Data Science</a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span className="card-badge">4 Courses</span>

            </div>
          </li>

          <li>
            <div className="category-card bg-[#ECEFFC]" style={{ "--color": "229, 75%, 58%" }}>

              <div className="card-icon">
                <img src= { Category3 }  width="40" height="40" loading="lazy"
                  alt="Off-Campus Programs" className="img" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">Augemented Reality</a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span className="card-badge">8 Courses</span>

            </div>
          </li>

          <li>
            <div className="category-card bg-[#FEF7E8]" style={{ "--color": "42, 94%, 55%" }}>

              <div className="card-icon">
                <img src= { Category4 }  width="40" height="40" loading="lazy"
                  alt="Hybrid Distance Programs" className="img" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">Computer Vision</a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span className="card-badge">8 Courses</span>

            </div>
          </li>

        </ul>

      </div>
    </section>
  );
};

export default Categories;

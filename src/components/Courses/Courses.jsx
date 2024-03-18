import React from 'react';
import './courses.css';
import Dev1 from '../../assets/course-1.jpg'
import Dev2 from '../../assets/course-2.jpg'
import Dev3 from '../../assets/course-3.jpg'

function Courses() {
  return (

<section className="section course mt-12 " id="courses" aria-label="course">
  <div className="container">
    <p className="section-subtitle">Popular Training Courses</p>
    <h2 className="h2 section-title">Pick A Course To Get Started</h2>
    <div className="grid-list2 ml-6"> {/* Wrap course cards in a div with grid-list class */}
    <div className="course-card">

<figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
  <img
   src= { Dev1 } 
    width="370"
    height="220"
    loading="lazy"
    alt=" AI"
    className="img-cover"
  />
</figure>


<div className="abs-badge">
  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

  <span className="span">3 Weeks</span>
</div>

<div className="card-content">

  <span className="badge">Beginner</span>

  <h3 className="h3">
    <a href="#" className="card-title">AI & Space Tech</a>
  </h3>

  <div className="wrapper">

    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>

    <p className="rating-text">(5.0/7 Rating)</p>

  </div>



  <ul className="card-meta-list">

    <li className="card-meta-item">
      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

      <span className="span">8 Lessons</span>
    </li>

    <li className="card-meta-item">
      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

      <span className="span">20 Students</span>
    </li>

  </ul>

</div>

</div>

<div className="course-card">

<figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
  <img
   src= { Dev2 } 
    width="370"
    height="220"
    loading="lazy"
    alt="Data Science"
    className="img-cover"
  />
</figure>

<div className="abs-badge">
  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

  <span className="span">3 Weeks</span>
</div>

<div className="card-content">

  <span className="badge">Beginner</span>

  <h3 className="h3">
    <a href="#" className="card-title">Data Science</a>
  </h3>

  <div className="wrapper">

    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>

    <p className="rating-text">(5.0/7 Rating)</p>

  </div>

 

  <ul className="card-meta-list">

    <li className="card-meta-item">
      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

      <span className="span">8 Lessons</span>
    </li>

    <li className="card-meta-item">
      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

      <span className="span">20 Students</span>
    </li>

  </ul>

</div>

</div>

<div className="course-card">

<figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
  <img
   src= { Dev3 } 
    width="370"
    height="220"
    loading="lazy"
    alt=" Computer Vision"
    className="img-cover"
  />
</figure>

<div className="abs-badge">
  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

  <span className="span">3 Weeks</span>
</div>

<div className="card-content">

  <span className="badge">Beginner</span>

  <h3 className="h3">
    <a href="#" className="card-title">Computer Vision</a>
  </h3>

  <div className="wrapper">

    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>

    <p className="rating-text">(5.0/7 Rating)</p>

  </div>

  

  <ul className="card-meta-list">

    <li className="card-meta-item">
      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

      <span className="span">8 Lessons</span>
    </li>

    <li className="card-meta-item">
      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

      <span className="span">20 Students</span>
    </li>

  </ul>

</div>

</div>

<div className="course-card">

<figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
  <img
   src= { Dev1 } 
    width="370"
    height="220"
    loading="lazy"
    alt="Virtual reality"
    className="img-cover"
  />
</figure>

<div className="abs-badge">
  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

  <span className="span">3 Weeks</span>
</div>

<div className="card-content">

  <span className="badge">Beginner</span>

  <h3 className="h3">
    <a href="#" className="card-title">Virtual Reality</a>
  </h3>

  <div className="wrapper">

    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>

    <p className="rating-text">(5.0/7 Rating)</p>

  </div>

 

  <ul className="card-meta-list">

    <li className="card-meta-item">
      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

      <span className="span">8 Lessons</span>
    </li>

    <li className="card-meta-item">
      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

      <span className="span">20 Students</span>
    </li>

  </ul>

</div>

</div>
 

<div className="course-card">

<figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
  <img
   src= { Dev2 } 
    width="370"
    height="220"
    loading="lazy"
    alt=" Augmented Reality"
    className="img-cover"
  />
</figure>

<div className="abs-badge">
  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

  <span className="span">3 Weeks</span>
</div>

<div className="card-content">

  <span className="badge">Beginner</span>

  <h3 className="h3">
    <a href="#" className="card-title">Augemented Reality</a>
  </h3>

  <div className="wrapper">

    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>

    <p className="rating-text">(5.0/7 Rating)</p>

  </div>



  <ul className="card-meta-list">

    <li className="card-meta-item">
      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

      <span className="span">8 Lessons</span>
    </li>

    <li className="card-meta-item">
      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

      <span className="span">20 Students</span>
    </li>

  </ul>

</div>

</div>

<div className="course-card">

<figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
  <img
   src= { Dev3 } 
    width="370"
    height="220"
    loading="lazy"
    alt="  Blockchain"
    className="img-cover"
  />
</figure>

<div className="abs-badge">
  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

  <span className="span">3 Weeks</span>
</div>

<div className="card-content">

  <span className="badge">Beginner</span>

  <h3 className="h3">
    <a href="#" className="card-title">  Blockchain </a>
  </h3>

  <div className="wrapper">

    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>

    <p className="rating-text">(5.0/7 Rating)</p>

  </div>

 

  <ul className="card-meta-list">

    <li className="card-meta-item">
      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

      <span className="span">8 Lessons</span>
    </li>

    <li className="card-meta-item">
      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

      <span className="span">20 Students</span>
    </li>

  </ul>

</div>

</div>
      {/* Repeat for other course cards */}
    </div>
    <a href="#" className="btn has-before">
      <span className="span">Browse more courses</span>
      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
    </a>
  </div>
</section>

);
}

export default Courses;

import React from "react";

const ProfileCard = ({ title, handle, imgSrc,description }) => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">{title}</p>
        </div>
      </section>
    <div className="card">
     <div className="card-image">
      <figure className="image is-1by1">
        <img src={imgSrc} alt="pda logo"></img>
       </figure>

     </div>
     <div className="card-content">
        <div className="media-content">
      <p className="title is-4"> {title}</p>
      <p className="subtitle is-6"> {handle}</p>
         <p className="subtitle is-6"> {description}</p>
   </div>
     </div>
    
    </div>
    </div>
  );
};

export default ProfileCard;

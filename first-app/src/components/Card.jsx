import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{overflow : "hidden"}}>
      <img
        src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/820097e5-641c-4fa2-8044-496935652690/5ec63901-23eb-4a7e-a782-81229b8fd3f5.png"
        alt="" width={280}
        style={{border : "2px solid Black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;

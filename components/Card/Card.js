import React from "react";
import styles from "./Card.module.css" ;
import {useRouter} from "next/router" ;

const Card = ({cat}) => {
    const router=useRouter() ;
    const {name,email,phone,image,id}=cat ;
  return (
    <div className="card" style={{width:"16rem"}}>
      <img src={image.url} className={styles.image} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <button  className="btn btn-primary" onClick={()=>router.push(`cats/${id}`)}>
          Go somewhere
        </button>
      </div>
    </div>
  );
};

export default Card;

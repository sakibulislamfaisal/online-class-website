import React from "react";
import "./Subject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Subject = (props) => {
  //console.log(props.subject);
  const { name, title, subject, price, img } = props.subject;
  const handleAddSubject = props.handleAddSubject;
  return (
    <div className="subject">
      <div className="subject-img">
        <img src={img} alt="" />
      </div>
      <div className="subject-info">
        <h4>{title}</h4>
        <small>name : {name}</small>
        <br />
        <small>subject : {subject}</small>
        <br />
        <small>
          <strong>price : {price}</strong>
        </small>
        <br />
        <button
          onClick={() => handleAddSubject(props.subject)}
          className="btn btn-info btn-sm "
        >
          <FontAwesomeIcon className="icon" icon={faUserPlus} />
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Subject;

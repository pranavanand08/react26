import React, { useState } from "react";

const ReviewForm = ({ onAddReview }) => {
  const [review, setReview] = useState({
    syllabusUpgrade: "",
    recentTechnology: "",
    practicalProcess: "",
    classInfrastructure: "",
    overallReview: "",
    name: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !review.syllabusUpgrade ||
      !review.recentTechnology ||
      !review.practicalProcess ||
      !review.name ||
      !review.number ||
      !review.email
    ) {
      alert("Please fill in all required fields");
      return;
    }
    onAddReview(review);
    setReview({
      syllabusUpgrade: "",
      recentTechnology: "",
      practicalProcess: "",
      classInfrastructure: "",
      overallReview: "",
      name: "",
      number: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <div>
        <label>Syllabus Upgrade: </label>
        <input
          type="radio"
          name="syllabusUpgrade"
          value="Yes"
          checked={review.syllabusUpgrade === "Yes"}
          onChange={handleChange}
        /> Yes
        <input
          type="radio"
          name="syllabusUpgrade"
          value="No"
          checked={review.syllabusUpgrade === "No"}
          onChange={handleChange}
        /> No
      </div>
      <div>
        <label>Recent Technology: </label>
        <input
          type="radio"
          name="recentTechnology"
          value="Yes"
          checked={review.recentTechnology === "Yes"}
          onChange={handleChange}
        /> Yes
        <input
          type="radio"
          name="recentTechnology"
          value="No"
          checked={review.recentTechnology === "No"}
          onChange={handleChange}
        /> No
      </div>
      <div>
        <label>Practical Process: </label>
        <input
          type="radio"
          name="practicalProcess"
          value="Yes"
          checked={review.practicalProcess === "Yes"}
          onChange={handleChange}
        /> Yes
        <input
          type="radio"
          name="practicalProcess"
          value="No"
          checked={review.practicalProcess === "No"}
          onChange={handleChange}
        /> No
      </div>
      <div>
        <label>Class Infrastructure: </label>
        <input
          type="text"
          name="classInfrastructure"
          value={review.classInfrastructure}
          onChange={handleChange}
          placeholder="Describe class infrastructure"
        />
      </div>
      <div>
        <label>Overall Review: </label>
        <textarea
          name="overallReview"
          value={review.overallReview}
          onChange={handleChange}
          placeholder="Your overall review"
        />
      </div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={review.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>
      <div>
        <label>Number: </label>
        <input
          type="text"
          name="number"
          value={review.number}
          onChange={handleChange}
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={review.email}
          onChange={handleChange}
          placeholder="Your email"
        />
      </div>
      <button type="submit" style={{ marginTop: "1rem" }}>Submit</button>
    </form>
  );
};

export default ReviewForm;

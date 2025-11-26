import React, { useState } from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewDisplay from "./components/ReviewDisplay";

const App = () => {
  const [changed, setChanged] = useState(false);

  const addReview = (newReview) => {
    const currentReviews = localStorage.getItem("collegeReviews");
    const reviews = currentReviews ? JSON.parse(currentReviews) : [];
    reviews.push(newReview);
    localStorage.setItem("collegeReviews", JSON.stringify(reviews));
    setChanged(!changed);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>College Review</h1>
      <ReviewForm onAddReview={addReview} />
      <ReviewDisplay trigger={changed} />
    </div>
  );
};

export default App;

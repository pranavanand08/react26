import React, { useEffect, useState } from "react";

const ReviewDisplay = ({ trigger }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const savedReviews = localStorage.getItem("collegeReviews");
    setReviews(savedReviews ? JSON.parse(savedReviews) : []);
  }, [trigger]);

  return (
    <div>
      <h2>Submitted Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div>
          {reviews.map((review, idx) => (
            <div key={idx} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", borderRadius: "6px" }}>
              <p><strong>Syllabus Upgrade:</strong> {review.syllabusUpgrade}</p>
              <p><strong>Recent Technology:</strong> {review.recentTechnology}</p>
              <p><strong>Practical Process:</strong> {review.practicalProcess}</p>
              <p><strong>Class Infrastructure:</strong> {review.classInfrastructure}</p>
              <p><strong>Overall Review:</strong> {review.overallReview}</p>
              <p><strong>Name:</strong> {review.name}</p>
              <p><strong>Number:</strong> {review.number}</p>
              <p><strong>Email:</strong> {review.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewDisplay;

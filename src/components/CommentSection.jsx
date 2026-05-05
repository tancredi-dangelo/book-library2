import { useEffect, useState } from "react";
import SubmitReviewForm from "./SubmitReviewForm";

const CommentSection = ({ selectedBook, onAddReview }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    width: isMobile ? "100%" : "25%",
    position: isMobile ? "relative" : "fixed",
    right: isMobile ? "0" : "20px",
    top: isMobile ? "0" : scrolled ? "10px" : "80px",
    bottom: isMobile ? "auto" : "10px",
    backgroundColor: "white",
    transition: "all 0.8s ease",
    height: isMobile ? "90%" : scrolled ? "97%" : "87%",
    borderRadius: "5px",
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  };

  return (
    <div style={style}>
      <h2 className="text-secondary mx-2 my-4 text-center">Reviews</h2>
      {selectedBook ? (
        <>
          <div className="p-2 mb-5">
            {selectedBook.reviews.map((review, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-start mx-2 p-2 mb-2 rounded-2 bg-white text-black border-0 shadow"
              >
                <p className="mb-0 fw-bold">{review.user}</p>
                <p className="mb-0">{review.review}</p>
                <p className="mb-0 text-muted">⭐ {review.rating}/10</p>
              </div>
            ))}
          </div>
          <div className="p-2">
            <h3 className="text-secondary mx-2 my-4 text-center">
              Share your review!
            </h3>
            <SubmitReviewForm onAddReview={onAddReview} />
          </div>
        </>
      ) : (
        <h6 className="text-center text-muted mt-3">
          Select a book to see its reviews
        </h6>
      )}
    </div>
  );
};

export default CommentSection;

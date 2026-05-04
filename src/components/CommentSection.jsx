import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SubmitReviewForm from "./SubmitReviewForm";

class CommentSection extends Component {
  state = {
    scrolled: false,
    isMobile: window.innerWidth < 768,
  };

  handleScroll = () => {
    const scrollY = window.scrollY;

    // adjust this value to match your navbar height
    if (scrollY > 80) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scrolled, isMobile } = this.state;
    const { selectedBook } = this.props;

    const style = {
      width: isMobile ? "100%" : "25%",
      position: isMobile ? "relative" : "fixed",
      right: isMobile ? "0" : "30px",
      top: isMobile ? "0" : scrolled ? "10px" : "70px",
      bottom: isMobile ? "auto" : scrolled ? "10px" : "10px",
      backgroundColor: "white",
      transition: "all 0.8s ease",
      height: isMobile ? "90%" : scrolled ? "97%" : "87%",
      borderRadius: "5px",
      overflowY: "auto",
    };
    return (
      <div style={style}>
        <h2 className="text-secondary m-2 text-center">Reviews</h2>
        {selectedBook ? (
          <div className="p-2">
            {selectedBook.reviews.map((review, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-start p-2 mb-2 rounded-2 bg-light text-black"
              >
                <p className="mb-0 fw-bold">{review.user}</p>
                <p className="mb-0 ">{review.review}</p>

                <p className="mb-0 text-muted">⭐ {review.rating}/10</p>
              </div>
            ))}
            <div className="p-2">
              <h3 className="text-secondary m-2 text-center">
                Share your review!
              </h3>
              <SubmitReviewForm />
            </div>
          </div>
        ) : (
          <h6 className="text-center text-muted mt-3">
            Select a book to see its reviews
          </h6>
        )}
      </div>
    );
  }
}

export default CommentSection;

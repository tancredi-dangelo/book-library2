import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SubmitReviewForm({ selectedBook, onAddReview }) {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      user: username,
      review,
      rating: Number(rating),
    };

    onAddReview(newReview);

    // Reset form
    setUsername("");
    setReview("");
    setRating(1);

    console.log("Review submitted:", newReview);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <Form.Group className="mb-3 px-2" controlId="formBasicUsername">
        <Form.Control
          type="text"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3 px-2" controlId="formBasicReview">
        <Form.Control
          type="text"
          value={review}
          placeholder="Type your review of this book"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 px-2 d-flex align-items-center justify-content-center"
        value={rating}
        controlId="formBasicReview"
      >
        <Form.Label className="m-0">Score</Form.Label>
        <Form.Select style={{ width: "60px", margin: "0 10px 0 10px" }}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option
              key={num}
              value={num}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {num}
            </option>
          ))}
        </Form.Select>
        <Button className="px-2 text-center" variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SubmitReviewForm;

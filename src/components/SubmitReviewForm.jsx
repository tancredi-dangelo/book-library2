import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SubmitReviewForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    console.log("Form submitted");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 px-2" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" />
      </Form.Group>

      <Form.Group className="mb-3 px-2" controlId="formBasicReview">
        <Form.Label>Review</Form.Label>
        <Form.Control type="text" placeholder="Type your review of this book" />
      </Form.Group>

      <Button className="mb-3 px-2" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SubmitReviewForm;

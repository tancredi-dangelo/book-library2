import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";
import history from "../data/history.json";
import { Component } from "react";

const genres = [
  { name: "Fantasy", data: fantasy },
  { name: "Horror", data: horror },
  { name: "Sci-Fi", data: scifi },
  { name: "Romance", data: romance },
  { name: "History", data: history },
];

class BookCard extends Component {
  state = {
    isSelected: false,
    readPlot: false,
    addToCart: false,
  };
  render() {
    const { book } = this.props;
    const { isSelected, addToCart, readPlot } = this.state;
    const plot = "This is a fake plot text intended for demonstration purposes";
    return (
      <Card
        style={{
          boxSizing: "border-box",
          height: "400px",
          border: isSelected ? "5px solid crimson" : "none",
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          style={{
            height: "200px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          onClick={() => {
            this.setState({ isSelected: !isSelected });
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title
            className="book-title"
            style={{
              height: "60px",
              overflow: "hidden",
              fontSize: "16px",
              cursor: "pointer",
              display: readPlot ? "none" : "inline-block",
            }}
            onClick={() => {
              this.setState({ isSelected: !isSelected });
            }}
          >
            {book.title}
          </Card.Title>
          <Card.Text
            className="mb-1"
            style={{ display: readPlot ? "inline-block" : "none" }}
          >
            <i>"{plot}"</i>
          </Card.Text>
          <Card.Text
            className="mb-1"
            style={{ display: readPlot ? "none" : "inline-block" }}
          >
            {book.price + "$"}
          </Card.Text>

          <div className="d-flex justify-content-center no-wrap mx-0 mt-3">
            <Button
              variant="success"
              className="btn-sm me-1"
              onClick={() => {
                this.setState({ addToCart: !addToCart });
              }}
            >
              {addToCart ? "Remove" : "Add to cart"}
            </Button>

            <Button
              variant="secondary"
              className="btn-sm ms-1"
              onClick={() => {
                this.setState({ readPlot: !readPlot });
              }}
            >
              {readPlot ? "Close" : "Read Plot"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

const getId = (name) => name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

function Grid() {
  return (
    <Container fluid className="px-5">
      {genres.map((genre) => (
        <div key={genre.name}>
          <h1
            id={`${getId(genre.name)}-section`}
            className="text-white mb-4 mt-5"
          >
            {genre.name}
          </h1>
          <Row className="g-3 mb-5">
            {genre.data.map((book) => (
              <Col
                className="mb-3"
                key={book.asin}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <BookCard book={book} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Grid;

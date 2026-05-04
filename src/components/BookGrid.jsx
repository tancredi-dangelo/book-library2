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
  // ✅ removed isSelected and selectedBook — they come from props now
  state = {
    readPlot: false,
    addToCart: false,
  };

  render() {
    // ✅ isSelected and onToggleSelect come from props, not state
    const { book, isSelected, onToggleSelect } = this.props;
    const { addToCart, readPlot } = this.state;
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
          style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
          onClick={() => onToggleSelect(book)} // ✅ calls App's updater
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title
            className="book-title"
            style={{
              height: "60px",
              fontSize: "16px",
              cursor: "pointer",
              display: readPlot ? "none" : "inline-block",
            }}
            onClick={() => onToggleSelect(book)} // ✅ calls App's updater
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
          <div className="text-centered d-flex align-items-center justify-content-center flex-wrap mx-0 mt-3">
            <Button
              fluid
              variant={addToCart ? "danger" : "success"}
              className="btn-sm mx-1 mb-1"
              onClick={() => this.setState({ addToCart: !addToCart })}
            >
              {addToCart ? "Remove" : "Add to cart"}
            </Button>
            <Button
              fluid
              variant="secondary"
              className="btn-sm mx-1 mb-1"
              onClick={() => this.setState({ readPlot: !readPlot })}
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

function Grid({ selectedBook, onToggleSelect }) {
  return (
    <Container className="px-4">
      {genres.map((genre) => (
        <div key={genre.name}>
          <h1
            id={`${getId(genre.name)}-section`}
            className="text-white mb-4 mt-4"
          >
            {genre.name}
          </h1>
          <Row className="g-3 mb-5">
            {genre.data.slice(0, 20).map((book) => (
              <Col
                className="mb-3"
                key={book.asin}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <BookCard
                  book={book}
                  isSelected={selectedBook?.asin === book.asin}
                  onToggleSelect={onToggleSelect}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Grid;

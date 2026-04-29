import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Component } from "react";

import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";
import history from "../data/history.json";

const genres = [
  "All Genres",
  "Fantasy",
  "Horror",
  "Sci-Fi",
  "Romance",
  "History",
];

const allBooks = {
  Fantasy: fantasy,
  Horror: horror,
  "Sci-Fi": scifi,
  Romance: romance,
  History: history,
};

class SearchForm extends Component {
  state = {
    selectedGenre: "All Genres",
    query: "",
    suggestions: [],
  };

  handleSearch = () => {
    const { selectedGenre, query } = this.state;

    const subSet =
      selectedGenre === "All Genres"
        ? Object.values(allBooks).flat()
        : allBooks[selectedGenre];

    const filteredSet = subSet.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()),
    );

    this.setState({ suggestions: filteredSet });
  };

  render() {
    const { selectedGenre, query, suggestions } = this.state;
    return (
      <div className="bg-black py-5 px-3 mx-5 my-3 rounded-3">
        <h2 className="text-white mx-5 mb-3">Browse by title</h2>
        <div style={{ position: "relative", width: "50%" }} className="mx-5">
          <Form className="d-flex">
            <Dropdown>
              <Dropdown.Toggle
                variant="black"
                className="text-black bg-light me-2"
                id="dropdown-basic"
                onClick={() => {
                  this.setState({
                    suggestions: [],
                  });
                }}
              >
                {selectedGenre}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {genres.map((genre) => (
                  <Dropdown.Item
                    key={genre}
                    style={{
                      borderBottom:
                        genre === "All Genres" ? "2px solid lightgrey" : "none",
                    }}
                    onClick={() =>
                      this.setState({ selectedGenre: genre, suggestions: [] })
                    }
                  >
                    {genre}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) =>
                this.setState({ query: e.target.value, suggestions: [] })
              }
            />
            <Button variant="success" onClick={this.handleSearch}>
              Search
            </Button>
          </Form>

          {suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "5px 0 0 5px",
                zIndex: 1000,
                maxHeight: "300px",
                overflowY: "auto",
                marginTop: "10px",
              }}
            >
              {suggestions.map((book) => (
                <div
                  key={book.asin}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f5f5f5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "white")
                  }
                >
                  <img
                    src={book.img}
                    alt={book.title}
                    style={{
                      width: "40px",
                      height: "55px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {book.title}
                    </div>
                    <div style={{ color: "#888", fontSize: "12px" }}>
                      ${book.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchForm;

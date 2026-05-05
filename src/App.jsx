import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// COMPONENTS
import MainNavbar from "./components/Navbar";
import Grid from "./components/BookGrid";
import WelcomeAlert from "./components/Alert";
import SearchForm from "./components/SearchForm";
import CommentSection from "./components/CommentSection.jsx";

// CSS
import "./App.css";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const toggleSelect = (book) => {
    setSelectedBook((prev) => (prev?.asin === book.asin ? null : book));
  };

  const handleAddReview = (newReview) => {
    setSelectedBook((prev) => ({
      ...prev,
      reviews: [...prev.reviews, newReview],
    }));
  };

  return (
    <div className="app bg-white">
      <header>
        <MainNavbar />
      </header>
      <main className="d-flex">
        <div style={{ width: "70%", margin: "auto" }}>
          <WelcomeAlert />
          <SearchForm />
          <Grid selectedBook={selectedBook} onToggleSelect={toggleSelect} />
        </div>
        <div style={{ width: "30%", marginLeft: "auto" }}>
          <CommentSection
            selectedBook={selectedBook}
            onAddReview={handleAddReview}
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

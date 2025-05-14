import React, { useEffect, useState } from "react";
import { fetchBands } from "./services/api";
import { getUserCity } from "./utils/location";
import SearchForm from "./components/SearchForm";
import BandList from "./components/BandList";

function App() {
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserCity().then((autoCity) => {
      setCity(autoCity);
      loadBands(autoCity);
    });
  }, []);

  const loadBands = async (selectedCity) => {
    setLoading(true);
    try {
      const res = await fetchBands(selectedCity);
      setBands(res.data);
    } catch (e) {
      alert("Failed to fetch bands.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setCity(input);
    loadBands(input);
  };

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🎸 Music Bands Finder</h2>
        <p className="text-muted">Find music bands founded in your city in the last 10 years.</p>
      </div>

      <SearchForm
        input={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSearch}
      />

      <div className="mt-4">
        {loading ? (
          <div className="text-center mt-4">
            <div className="spinner-border text-secondary" role="status" />
            <p className="mt-2">Loading bands...</p>
          </div>
        ) : (
          <BandList bands={bands} city={city} />
        )}
      </div>
    </div>
  );
}

export default App;

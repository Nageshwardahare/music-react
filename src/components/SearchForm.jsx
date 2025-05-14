export default function SearchForm({ input, onChange, onSubmit }) {
  return (
    <div className="container mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={input}
                onChange={onChange}
                placeholder="Enter city"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

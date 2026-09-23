import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <button className="theme-button">
        🌙
      </button>
    </header>
  );
}

export default Navbar;
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="hero container"
    >
      <div className="hero-copy">
        <h1 id="hero-heading">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking" className="button-link">
          Reserve a Table
        </Link>
      </div>
      <img
        src="/icons_assets/restauranfood.jpg"
        alt="A plated Mediterranean dish from Little Lemon"
      />
    </section>
  );
}

export default CallToAction;

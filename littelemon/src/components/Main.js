function Main() {
  return (
    <main className="site-main">
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="hero container"
      >
        <div className="hero-copy">
          <h1 id="hero-heading">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern touch.
          </p>
          <a href="#reservations" className="button-link">
            Reserve a Table
          </a>
        </div>
        <img
          src="/icons_assets/restauranfood.jpg"
          alt="A plated Mediterranean dish from Little Lemon"
        />
      </section>

      <section
        id="menu"
        aria-labelledby="specials-heading"
        className="specials container"
      >
        <div className="section-heading-row">
          <h2 id="specials-heading">Specials</h2>
          <a href="#order-online" className="button-link alt">
            Online Menu
          </a>
        </div>

        <div className="specials-grid">
          <article className="card">
            <img src="/icons_assets/greek salad.jpg" alt="Greek salad" />
            <div className="card-top">
              <h3>Greek Salad</h3>
              <span>$12.99</span>
            </div>
            <p>
              Crisp lettuce, peppers, olives, and feta cheese, tossed in house
              dressing.
            </p>
          </article>

          <article className="card">
            <img src="/icons_assets/bruchetta.svg" alt="Bruschetta" />
            <div className="card-top">
              <h3>Bruschetta</h3>
              <span>$8.99</span>
            </div>
            <p>
              Grilled bread with garlic and fresh tomato, finished with extra
              virgin olive oil.
            </p>
          </article>

          <article className="card">
            <img src="/icons_assets/lemon dessert.jpg" alt="Lemon dessert" />
            <div className="card-top">
              <h3>Lemon Dessert</h3>
              <span>$7.99</span>
            </div>
            <p>
              Traditional lemon cake with citrus glaze and a smooth, creamy
              finish.
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="testimonials-heading"
        className="testimonials container"
      >
        <h2 id="testimonials-heading">Testimonials</h2>
        <div className="testimonials-grid">
          <article className="review-card">
            <h3>Rating</h3>
            <span>5/5</span>
            <p>"Best Mediterranean food in the neighborhood."</p>
          </article>
          <article className="review-card">
            <h3>Rating</h3>
            <span>5/5</span>
            <p>"Service was quick and the food was fresh."</p>
          </article>
          <article className="review-card">
            <h3>Rating</h3>
            <span>4.5/5</span>
            <p>"Cozy ambiance and excellent desserts."</p>
          </article>
          <article className="review-card">
            <h3>Rating</h3>
            <span>5/5</span>
            <p>"Reservation process was easy and seamless."</p>
          </article>
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-heading"
        className="about container"
      >
        <div>
          <h2 id="about-heading">Little Lemon</h2>
          <h3>Adrian and Mario</h3>
          <p>
            Since opening, Little Lemon has celebrated authentic flavors and
            warm hospitality for every guest.
          </p>
        </div>
        <img
          src="/icons_assets/Mario and Adrian A.jpg"
          alt="Adrian and Mario, the owners of Little Lemon"
        />
      </section>

      <section
        id="reservations"
        className="anchor-section container"
        aria-label="Reservations"
      >
        <h2>Reservations</h2>
        <p>Book your table online and enjoy a memorable dining experience.</p>
      </section>

      <section
        id="order-online"
        className="anchor-section container"
        aria-label="Order online"
      >
        <h2>Order Online</h2>
        <p>Enjoy your favorites at home with quick online ordering.</p>
      </section>

      <section
        id="login"
        className="anchor-section container"
        aria-label="Login"
      >
        <h2>Login</h2>
        <p>Sign in to manage reservations and saved preferences.</p>
      </section>
    </main>
  );
}

export default Main;

function Chicago() {
  return (
    <section
      id="about"
      aria-labelledby="chicago-heading"
      className="about container"
    >
      <div className="about-copy">
        <h2 id="chicago-heading">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
        <p>
          Since opening our doors, we have celebrated the authentic flavors of
          the Mediterranean with warm hospitality and a passion for bringing
          people together over great food.
        </p>
      </div>
      <div className="about-images">
        <img
          src="/icons_assets/restaurant.jpg"
          alt="Inside the Little Lemon restaurant"
          className="about-img-front"
        />
        <img
          src="/icons_assets/Mario and Adrian A.jpg"
          alt="Mario and Adrian, owners of Little Lemon"
          className="about-img-back"
        />
      </div>
    </section>
  );
}

export default Chicago;

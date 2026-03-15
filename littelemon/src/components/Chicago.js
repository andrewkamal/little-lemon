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
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="about-images">
        <img
          src="/icons_assets/Mario and Adrian A.jpg"
          alt="Mario and Adrian, owners of Little Lemon"
          className="about-img-front"
        />
        <img
          src="/icons_assets/Mario and Adrian b.jpg"
          alt="Mario and Adrian in the Little Lemon kitchen"
          className="about-img-back"
        />
      </div>
    </section>
  );
}

export default Chicago;

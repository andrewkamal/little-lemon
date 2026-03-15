const reviewsData = [
  {
    id: 1,
    name: "Emily R.",
    rating: 5,
    text: "Best Mediterranean food in the neighborhood. The Greek salad is absolutely divine!",
  },
  {
    id: 2,
    name: "Carlos M.",
    rating: 5,
    text: "Service was quick and the food was incredibly fresh. Will definitely be back.",
  },
  {
    id: 3,
    name: "Sofia L.",
    rating: 5,
    text: "Cozy ambiance and excellent desserts. The lemon cake is a must-try.",
  },
  {
    id: 4,
    name: "James T.",
    rating: 5,
    text: "Reservation process was easy and seamless. Great experience from start to finish.",
  },
];

function StarRating({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

function CustomersSay() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="testimonials container"
    >
      <h2 id="testimonials-heading">What Our Customers Say!</h2>
      <div className="testimonials-grid">
        {reviewsData.map((review) => (
          <article className="review-card" key={review.id}>
            <div className="review-avatar" aria-hidden="true">
              {review.name.charAt(0)}
            </div>
            <StarRating rating={review.rating} />
            <p className="review-text">"{review.text}"</p>
            <strong className="reviewer-name">{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;

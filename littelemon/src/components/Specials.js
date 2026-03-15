import { Link } from "react-router-dom";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    img: "/icons_assets/greek salad.jpg",
    alt: "Fresh Greek salad with feta and olives",
    description:
      "Crisp lettuce, peppers, olives, and feta cheese, tossed in our signature house dressing.",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$8.99",
    img: "/icons_assets/bruchetta.svg",
    alt: "Bruschetta with tomato and garlic on grilled bread",
    description:
      "Grilled bread with garlic and fresh tomato, finished with extra virgin olive oil.",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$7.99",
    img: "/icons_assets/lemon dessert.jpg",
    alt: "Homemade lemon dessert with citrus glaze",
    description:
      "Traditional lemon cake with citrus glaze and a smooth, creamy finish.",
  },
];

function Specials() {
  return (
    <section
      id="menu"
      aria-labelledby="specials-heading"
      className="specials container"
    >
      <div className="section-heading-row">
        <h2 id="specials-heading">This Week's Specials!</h2>
        <Link to="/#menu" className="button-link alt">
          Online Menu
        </Link>
      </div>

      <div className="specials-grid">
        {specialsData.map((item) => (
          <article className="card" key={item.id}>
            <img src={item.img} alt={item.alt} />
            <div className="card-top">
              <h3>{item.name}</h3>
              <span>{item.price}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;

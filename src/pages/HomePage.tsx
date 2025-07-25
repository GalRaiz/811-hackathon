import Card from "../components/Card";

const HomePage = () => {
  const cards = [
    {
      title: "example",
      description: "volenteer example",
      type: "volunteer",
    },
  ];
  const clickHandler = () => {};

  return (
    <div className="main-container">
      <div className="header"></div>
      <div className="content">
        <div className="content-title">Welcome 811</div>
        <div className="content-subtitle">How can you help today?</div>
        <div className="card-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              clickHandler={() => clickHandler()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

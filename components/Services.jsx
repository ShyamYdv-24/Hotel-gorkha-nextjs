const SERVICES = [
  {
    title: "Comfortable Stay",
    description: "A relaxing environment for guests during their stay.",
  },
  {
    title: "Dining",
    description: "A convenient place to enjoy meals and refreshments.",
  },
  {
    title: "Wi-Fi",
    description: "Internet access for staying connected.",
  },
  {
    title: "Parking",
    description: "Convenient parking facilities for guests.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <h2>Facilities &amp; Services</h2>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Services() {
  const services = [
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

  return (
    <section id="services">
      <h2>Facilities & Services</h2>

      <div>
        {services.map((service) => (
          <div key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
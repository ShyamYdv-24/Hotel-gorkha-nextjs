export default function Gallery() {
  const images = [
    {
      id: 1,
      title: "Hotel Exterior",
    },
    {
      id: 2,
      title: "Hotel Room",
    },
    {
      id: 3,
      title: "Dining Area",
    },
    {
      id: 4,
      title: "Hotel Interior",
    },
    {
      id: 5,
      title: "Guest Area",
    },
    {
      id: 6,
      title: "Hotel View",
    },
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>

      <div>
        {images.map((image) => (
          <div key={image.id}>
            <div>
              Image
            </div>

            <h3>{image.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
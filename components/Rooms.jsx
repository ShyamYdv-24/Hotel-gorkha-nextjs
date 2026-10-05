export default function Rooms() {
  const rooms = [
    {
      name: "Standard Room",
      description: "A comfortable room for a relaxing stay.",
    },
    {
      name: "Deluxe Room",
      description: "A spacious room designed for extra comfort.",
    },
    {
      name: "Family Room",
      description: "A convenient room option for families and groups.",
    },
  ];

  return (
    <section id="rooms">
      <h2>Our Rooms</h2>

      <div>
        {rooms.map((room) => (
          <div key={room.name}>
            <div>
              Room Image
            </div>

            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <button>View Room</button>
          </div>
        ))}
      </div>
    </section>
  );
}
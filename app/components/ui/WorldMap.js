"use client";

export default function WorldMap({ dots = [] }) {
  return (
    <div className="w-full h-[500px] bg-[#D9D9D9] flex items-center justify-center rounded-lg relative">
      {/* Placeholder for World Map */}
      <p className="text-gray-700 text-lg">World Map will go here 🌎</p>

      {/* Optional: visualize dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-red-500 rounded-full"
          style={{
            top: `${50 + i * 5}px`, // temporary fake positions
            left: `${50 + i * 10}px`,
          }}
        />
      ))}
    </div>
  );
}

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border border-gray-200">
      <h3 className="text-lg font-bold">{artist.name}</h3>
      <p>🎭 <strong>Category:</strong> {artist.category}</p>
      <p>📍 <strong>Location:</strong> {artist.location}</p>
      <p>💰 <strong>Price:</strong> {artist.priceRange}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}

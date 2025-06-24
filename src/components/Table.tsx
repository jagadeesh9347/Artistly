type ArtistRow = {
  id: number;
  name: string;
  category: string[];
  location: string;
  feeRange: string;
};

type Props = {
  data: ArtistRow[];
};

export default function Table({ data }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Location</th>
            <th className="p-3">Fee</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id} className="border-t">
              <td className="p-3">{artist.name}</td>
              <td className="p-3">{artist.category.join(", ")}</td>
              <td className="p-3">{artist.location}</td>
              <td className="p-3">{artist.feeRange}</td>
              <td className="p-3">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

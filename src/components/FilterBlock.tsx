type Props = {
  selected: {
    category: string;
    location: string;
  };
  onChange: (type: string, value: string) => void;
};

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const locations = ["Mumbai", "Bangalore", "Delhi", "Pune"];

export default function FilterBlock({ selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        className="border rounded px-4 py-2"
        value={selected.category}
        onChange={(e) => onChange("category", e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        className="border rounded px-4 py-2"
        value={selected.location}
        onChange={(e) => onChange("location", e.target.value)}
      >
        <option value="">All Locations</option>
        {locations.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
}

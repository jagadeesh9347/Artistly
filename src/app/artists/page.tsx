"use client";

import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import artistData from "@/data/artists.json";

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
};

export default function ArtistListingPage() {
  const [filtered, setFiltered] = useState<Artist[]>([]);
  const [filters, setFilters] = useState({ category: "", location: "" });

  useEffect(() => {
    let data = artistData;

    if (filters.category) {
      data = data.filter((a) => a.category === filters.category);
    }
    if (filters.location) {
      data = data.filter((a) => a.location === filters.location);
    }

    setFiltered(data);
  }, [filters]);

  function handleChange(type: string, value: string) {
    setFilters((prev) => ({ ...prev, [type]: value }));
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🎭 Artist Listings</h1>
      <FilterBlock selected={filters} onChange={handleChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p>No artists match the selected filters.</p>
        )}
      </div>
    </div>
  );
}

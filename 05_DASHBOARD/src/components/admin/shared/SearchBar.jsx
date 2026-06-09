import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative flex-1">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search by name, ID, or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-400 shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;
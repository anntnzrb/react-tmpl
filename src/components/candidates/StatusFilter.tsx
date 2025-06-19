import { useSearch, useNavigate } from "@tanstack/react-router";
import { CandidateStatusOptions } from "@/types/candidate";
import type { CandidateSearch } from "@/types/candidate";

export const StatusFilter = () => {
  const search = useSearch({ from: "/candidates" }) as CandidateSearch;
  const navigate = useNavigate({ from: "/candidates" });

  const handleFilterChange = (status?: string) => {
    navigate({ search: status ? { status } : {} });
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        onClick={() => handleFilterChange()}
        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
          !search.status
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Todos
      </button>
      {CandidateStatusOptions.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => handleFilterChange(value)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            search.status === value
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

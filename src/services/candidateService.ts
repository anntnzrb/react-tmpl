import type { Candidate, CandidateSearch } from "@/types/candidate";

export const filterCandidates = (
  candidates: Candidate[],
  filters: CandidateSearch,
): Candidate[] =>
  candidates.filter(
    (candidate) => !filters.status || candidate.status === filters.status,
  );

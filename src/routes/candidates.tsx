import { createFileRoute } from "@tanstack/react-router";
import { CandidatesPage } from "@/components/candidates/CandidatesPage";
import { getData } from "@/api/candidates";
import { filterCandidates } from "@/services/candidateService";
import { Effect, Schema } from "effect";
import { CandidateSearchSchema } from "@/types/candidate";

export const Route = createFileRoute("/candidates")({
  validateSearch: Schema.decodeUnknownSync(CandidateSearchSchema),
  loaderDeps: ({ search }) => ({ search }),
  loader: ({ deps }) =>
    Effect.runPromise(
      getData().pipe(Effect.map((c) => filterCandidates(c, deps.search))),
    ),
  component: () => {
    const candidates = Route.useLoaderData();
    return <CandidatesPage candidates={candidates} />;
  },
});

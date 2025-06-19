import { Candidate as CandidateComponent } from "./Candidate";
import { StatusFilter } from "./StatusFilter";
import { Container } from "@/components/ui/Container";
import type { Candidate } from "@/types/candidate";

interface CandidatesPageProps {
  candidates: Candidate[];
}

export const CandidatesPage = ({ candidates }: CandidatesPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Lista de Candidatos
          </h1>
          <StatusFilter />
        </div>
        <div className="flex flex-wrap justify-center gap-6 min-h-[400px]">
          {candidates.map((c) => (
            <CandidateComponent key={c.id} {...c} />
          ))}
        </div>
      </Container>
    </div>
  );
};

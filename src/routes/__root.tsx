import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Candidate } from "@/components/Candidate";
import type { CandidateProps } from "@/types/candidate";

const candidates: CandidateProps[] = [
  {
    name: "Ana García",
    age: 28,
    experience: 5,
    status: "contratado",
    skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    working: true,
  },
  {
    name: "Carlos Mendoza",
    age: 32,
    experience: 8,
    status: "pendiente",
    skills: ["Python", "Django", "PostgreSQL", "AWS"],
    working: false,
  },
  {
    name: "María Rodriguez",
    age: 25,
    experience: 3,
    status: "revisión",
    skills: ["Vue.js", "JavaScript", "CSS", "Git"],
    working: true,
  },
  {
    name: "Luis Fernández",
    age: 30,
    experience: 6,
    status: "rechazado",
    skills: ["Java", "Spring Boot", "MySQL", "Docker"],
    working: false,
  },
];

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Lista de Candidatos
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            {candidates.map((candidate, index) => (
              <Candidate
                key={index}
                name={candidate.name}
                age={candidate.age}
                experience={candidate.experience}
                status={candidate.status}
                skills={candidate.skills}
                working={candidate.working}
              />
            ))}
          </div>
        </div>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

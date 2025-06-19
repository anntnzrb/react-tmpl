import { Effect, Schema } from "effect";
import { HttpClient, FetchHttpClient } from "@effect/platform";
import { CandidateSchema, type Candidate } from "@/types/candidate";

const candidatesData: Candidate[] = [
  {
    id: "1",
    name: "Ana García",
    age: 28,
    experience: 5,
    status: "contratado",
    skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    working: true,
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    age: 32,
    experience: 8,
    status: "pendiente",
    skills: ["Python", "Django", "PostgreSQL", "AWS"],
    working: false,
  },
  {
    id: "3",
    name: "María Rodriguez",
    age: 25,
    experience: 3,
    status: "revisión",
    skills: ["Vue.js", "JavaScript", "CSS", "Git"],
    working: true,
  },
  {
    id: "4",
    name: "Luis Fernández",
    age: 30,
    experience: 6,
    status: "rechazado",
    skills: ["Java", "Spring Boot", "MySQL", "Docker"],
    working: false,
  },
];

export const getData = (): Effect.Effect<Candidate[]> =>
  HttpClient.get("/api/candidates").pipe(
    Effect.flatMap((response) => response.json),
    Effect.flatMap(Schema.decodeUnknown(Schema.Array(CandidateSchema))),
    Effect.map((data) => [...data]),
    Effect.provide(FetchHttpClient.layer),
    Effect.orElseSucceed(() => candidatesData),
  );

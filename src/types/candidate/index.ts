import { Schema } from "effect";

export const CandidateStatus = Schema.Literal(
  "contratado",
  "pendiente",
  "revisión",
  "rechazado",
);

export type CandidateStatus = Schema.Schema.Type<typeof CandidateStatus>;

export const CandidateStatusOptions = [
  { value: "contratado", label: "Contratado" },
  { value: "pendiente", label: "Pendiente" },
  { value: "revisión", label: "Revisión" },
  { value: "rechazado", label: "Rechazado" },
] as const;

export const CandidateSchema = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  age: Schema.Number,
  experience: Schema.Number,
  status: CandidateStatus,
  skills: Schema.Array(Schema.String),
  working: Schema.Boolean,
});

export type Candidate = Schema.Schema.Type<typeof CandidateSchema>;

export const CandidateSearchSchema = Schema.Struct({
  status: Schema.optional(CandidateStatus),
});

export type CandidateSearch = Schema.Schema.Type<typeof CandidateSearchSchema>;

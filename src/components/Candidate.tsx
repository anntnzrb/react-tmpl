import { Match } from "effect";
import { pipe } from "effect";
import type { CandidateProps } from "@/types/candidate";

const getStatusStyle = (status: string) => {
  const color = pipe(
    status.toLowerCase(),
    Match.value,
    Match.when("contratado", () => "green"),
    Match.when("pendiente", () => "yellow"),
    Match.when("revisión", () => "blue"),
    Match.when("rechazado", () => "red"),
    Match.orElse(() => "gray"),
  );

  return {
    backgroundColor: `var(--color-${color}-100)`,
    color: `var(--color-${color}-800)`,
  };
};

const renderWorkingStatus = (working: boolean) => {
  const { icon, text, color } = working
    ? { icon: "✓", text: "Trabajando", color: "green" }
    : { icon: "✗", text: "No trabajando", color: "red" };

  const style = { color: `var(--color-${color}-600)` };

  return (
    <>
      <span style={style}>{icon}</span>
      <span className="text-sm font-medium" style={style}>
        {text}
      </span>
    </>
  );
};

export const Candidate = ({
  name,
  age,
  experience,
  status,
  skills,
  working,
}: CandidateProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600">{age} años</p>
          </div>
          <div className="flex items-center gap-2">
            {renderWorkingStatus(working)}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Experiencia:</span> {experience} años
        </p>
      </div>

      <div className="mb-4">
        <span
          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
          style={getStatusStyle(status)}
        >
          {status}
        </span>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">Habilidades:</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

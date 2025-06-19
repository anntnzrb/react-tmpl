import type { CandidateStatus } from "@/types/candidate";

const statusColorMap: Record<CandidateStatus, string> = {
  contratado: "green",
  pendiente: "yellow",
  revisión: "blue",
  rechazado: "red",
};

export const getStatusColor = (status: CandidateStatus): string => {
  return statusColorMap[status] || "gray";
};

export const getStatusStyle = (status: CandidateStatus) => {
  const color = getStatusColor(status);
  return {
    backgroundColor: `var(--color-${color}-100)`,
    color: `var(--color-${color}-800)`,
  };
};

export const getColorStyle = (
  color: string,
  variant: "text" | "bg" = "text",
) => {
  const intensity = variant === "bg" ? "100" : "600";
  return { color: `var(--color-${color}-${intensity})` };
};

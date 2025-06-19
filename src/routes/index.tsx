import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { Option } from "effect";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const version = Option.fromNullable(import.meta.env["VITE_VERSION"]).pipe(
    Option.getOrElse(() => "6.3.5"),
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <img src={logo} alt="logo" className="h-20" />
      <p className="text-gray-600">Version: {version}</p>
    </div>
  );
}

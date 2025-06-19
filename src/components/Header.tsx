import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";

export const Header = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 hover:text-gray-700"
            >
              Home
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/candidates"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeProps={{
                className: "text-blue-600 bg-blue-50",
              }}
            >
              Candidatos
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

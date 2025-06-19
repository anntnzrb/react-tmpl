import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "@/hooks/useProducts";
import { useQueryClient } from "@tanstack/react-query";
import { Option, Match } from "effect";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProductGrid } from "@/components/product/ProductGrid";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useProducts();
  const products = Option.fromNullable(data).pipe(Option.getOrElse(() => []));

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  const renderBtn = () =>
    Match.value(isLoading).pipe(
      Match.when(true, () => (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      )),
      Match.orElse(() => <span>🔄</span>),
    );

  const renderContent = () =>
    Match.value({ isLoading, error, products }).pipe(
      Match.when({ isLoading: true }, () => <LoadingSpinner />),
      Match.when(
        ({ error }) => error !== null && error !== undefined,
        ({ error }) => <ErrorMessage error={error!} />,
      ),
      Match.when(
        ({ products }) => products.length === 0,
        () => <EmptyState />,
      ),
      Match.orElse(({ products }) => <ProductGrid products={products} />),
    );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">Products</h1>
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 transition-all duration-200 flex items-center gap-2 ${
              isLoading ? "animate-pulse" : ""
            }`}
          >
            {renderBtn()}
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

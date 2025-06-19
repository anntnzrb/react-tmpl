interface EmptyStateProps {
  message?: string;
}

export const EmptyState = ({ message = "No items found" }: EmptyStateProps) => (
  <div className="text-center py-8">
    <p className="text-gray-500">{message}</p>
  </div>
);

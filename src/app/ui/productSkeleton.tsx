export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border bg-white p-4 shadow-sm">
      <div className="mb-4 h-40 w-full rounded-md bg-gray-200" />
      <hr className="my-2 border-gray-200" />

      <div className="mt-auto flex justify-between items-center pt-2">
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="h-4 w-10 bg-gray-200 rounded" />
      </div>
      
    </div>
  );
}
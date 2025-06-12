export default function InventoryLoading() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="flex space-x-4 mb-6">
        <div className="h-10 min-w-[140px] rounded-md bg-gray-200 animate-pulse" />
        <div className="h-10 min-w-[140px] rounded-md bg-gray-200 animate-pulse" />
      </div>

      {/* Product card skeletons */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-white shadow p-4 rounded-md flex gap-x-4 relative"
        >
          <div className="w-24 h-24 bg-gray-200 rounded-md animate-pulse" />

          <div className="flex flex-col flex-1 space-y-2">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="flex gap-6 mt-2">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 w-16 h-8 bg-blue-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}
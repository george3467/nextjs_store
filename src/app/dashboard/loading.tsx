export default function DashboardLoading() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="flex space-x-4 mb-6">
        <div className="h-10 min-w-[140px] rounded-md bg-gray-200 animate-pulse" />
        <div className="h-10 min-w-[140px] rounded-md bg-gray-200 animate-pulse" />
      </div>

      {/* Skeleton for each order card */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white shadow p-4 rounded-md flex items-start gap-4 relative"
        >
          <div className="w-24 h-24 bg-gray-200 rounded-md animate-pulse" />

          <div className="flex-1 space-y-2">
            <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
          </div>

          <div className="absolute bottom-4 right-4">
            <div className="w-32 h-10 bg-green-200 rounded-md animate-pulse" />
          </div>
          
        </div>
      ))}
    </div>
  );
}
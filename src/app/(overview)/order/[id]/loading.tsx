export default function OrderFormLoading() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <div className="h-6 w-3/4 mx-auto bg-gray-200 rounded animate-pulse" />

      <div className="text-center space-y-3">
        <div className="mx-auto w-48 h-36 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-6 w-1/2 mx-auto bg-gray-200 rounded animate-pulse" />
        <div className="h-5 w-20 mx-auto bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1" />
          <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse" />
        </div>

        <div>
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-1" />
          <div className="h-20 w-full bg-gray-100 rounded-md animate-pulse" />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <div className="h-10 w-24 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-10 w-32 bg-blue-200 rounded-md animate-pulse" />
      </div>
      
    </div>
  );
}
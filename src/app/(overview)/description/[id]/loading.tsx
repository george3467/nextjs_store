export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md animate-pulse">
      <div className="mb-4 h-5 w-32 bg-gray-200 rounded"></div> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md">
            <div className="h-80 w-full bg-gray-200 rounded-md"></div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            </div>
          <div className="h-10 bg-gray-300 rounded w-full md:w-40"></div>
        </div>
      </div>
    </div>
  );
}
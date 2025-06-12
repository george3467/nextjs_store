export default function EditProductLoading() {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-md mt-10 animate-pulse">
      
      <div className="text-center">
        <div className="w-40 h-40 mx-auto bg-gray-200 rounded mb-4" />
        <div className="h-6 w-1/2 mx-auto bg-gray-300 rounded" />
      </div>

      <div>
        <div className="h-4 w-40 bg-gray-200 mb-2 rounded" />
        <div className="h-10 w-full bg-gray-100 rounded" />
      </div>

      <div>
        <div className="h-4 w-40 bg-gray-200 mb-2 rounded" />
        <div className="h-10 w-full bg-gray-100 rounded" />
      </div>

      <div className="flex justify-between pt-4">
        <div className="h-10 w-24 bg-gray-300 rounded" />
        <div className="h-10 w-32 bg-green-300 rounded" />
      </div>

    </div>
  );
}
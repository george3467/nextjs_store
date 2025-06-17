
type PaginationProps = {
  totalItems: number;                   // Total number of items across all pages    
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void; // Callback when a new page is selected
};

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {

  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;

  // Handle going to the previous page
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // Handle going to the next page
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4 space-x-2">
      
      {/* Previous Arrow */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        «
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Arrow */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        »
      </button>
    </div>
  );
}
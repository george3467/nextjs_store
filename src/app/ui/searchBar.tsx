type SearchBarProps = {
  value: string;                                              // Current value of the search input          
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Callback for input change
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    // Center the input horizontally
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
        className="w-[60%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
}
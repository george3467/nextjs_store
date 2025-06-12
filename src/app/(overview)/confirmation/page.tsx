import Link from 'next/link';

export default function Confirmation() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 px-4 pt-24">
      <div className="bg-white p-10 rounded-lg border border-gray-300 bg-gray-50 shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Thank you for your purchase!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your order has been placed successfully.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The product will arrive in <span className="font-semibold">3 days</span>.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Please prepare to pay <span className="font-semibold">Cash on Delivery</span>.
        </p>

        {/* Return to Home button */}
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
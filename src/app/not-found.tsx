import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rm-light p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bebas text-rm-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-rm-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 dark:border-blue-400 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Generating your interior design...
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
        This may take a few moments
      </p>
    </div>
  );
}


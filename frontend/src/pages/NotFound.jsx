import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-7xl font-bold">404</p>

        <h1 className="mt-4 text-3xl font-semibold">
          Page not found
        </h1>

        <p className="mt-4 text-gray-600">
          The page you are looking for may have been moved, deleted,
          or the address may be incorrect.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 rounded-md bg-black px-6 py-3 text-white hover:opacity-80"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
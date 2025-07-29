import Layout from "@/components/layouts/Layout";
import Link from "next/link";

const Custom404 = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Go back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;
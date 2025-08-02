import Button from "@/components/common/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1> Welcome to Splash App </h1>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Splash App!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Options */}
      <div className="flex gap-6">
        <Link href="/generate-text-ai">
          <Button buttonLabel="Generate Text" buttonBackgroundColor="blue" />
        </Link>
        <Link href="/text-to-image">
          <Button buttonLabel="Text to Image" buttonBackgroundColor="green" />
        </Link>
        <Link href="/counter-app">
          <Button buttonLabel="Contact us" buttonBackgroundColor="orange" />
        </Link>
      </div>
    </div>
  );
}
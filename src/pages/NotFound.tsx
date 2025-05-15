
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Church } from "lucide-react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-church-cream">
      <div className="text-center max-w-lg px-6">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-church-purple/10 p-6">
            <Church className="h-12 w-12 text-church-purple" />
          </div>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-church-purple mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oh, dear friend! The page you're looking for has gone on a spiritual retreat.
        </p>
        <p className="text-gray-600 mb-8">
          Let's guide you back to our parish community.
        </p>
        <Button asChild className="bg-church-purple hover:bg-church-purple/90">
          <Link to="/">
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

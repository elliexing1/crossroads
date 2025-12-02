import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-rounded font-bold text-primary-orange">404</h1>
        <p className="caption mb-8">Oops! This page got lost in the darkroom...</p>
        <p className="text-muted-foreground mb-8">
          Looks like this frame didn't develop properly. 
          <br />
          Let's get you back to somewhere familiar.
        </p>
        <Link to="/">
          <Button size="lg" className="rounded-full shadow-lg hover:scale-105 transition-transform">
            <Home className="mr-2" size={20} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

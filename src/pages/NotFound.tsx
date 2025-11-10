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
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-serif font-bold">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">Page not found</p>
        <Link to="/">
          <Button size="lg">
            <Home className="mr-2" size={20} />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

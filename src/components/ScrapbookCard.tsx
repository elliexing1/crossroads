import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrapbookCardProps {
  children: ReactNode;
  className?: string;
  variant?: "polaroid" | "paper" | "washi";
  rotate?: "left" | "right" | "none";
}

const ScrapbookCard = ({ children, className, variant = "paper", rotate = "none" }: ScrapbookCardProps) => {
  const rotationClass = rotate === "left" ? "rotate-slight-left" : rotate === "right" ? "rotate-slight-right" : "";
  
  if (variant === "polaroid") {
    return (
      <div className={cn("polaroid photo-reveal", rotationClass, className)}>
        {children}
      </div>
    );
  }
  
  if (variant === "washi") {
    return (
      <div className={cn("paper-cutout washi-tape photo-reveal", rotationClass, className)}>
        {children}
      </div>
    );
  }
  
  return (
    <div className={cn("paper-cutout scrapbook-shadow photo-reveal", rotationClass, className)}>
      {children}
    </div>
  );
};

export default ScrapbookCard;

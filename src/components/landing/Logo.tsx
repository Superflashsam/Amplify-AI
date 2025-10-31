import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amplify-coral to-electric-purple flex items-center justify-center shadow-lg shadow-amplify-coral/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </div>
      <div className="text-xl font-semibold tracking-tight text-deep-charcoal font-display">
        Amplify
      </div>
    </div>
  );
};

export default Logo;

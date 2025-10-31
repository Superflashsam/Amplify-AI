import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M5.83331 22.1667V5.83333C5.83331 5.09964 6.43296 4.5 7.16665 4.5H11.6666L18.6666 12.8333V22.1667C18.6666 22.9004 18.067 23.5 17.3333 23.5H7.16665C6.43296 23.5 5.83331 22.9004 5.83331 22.1667Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6667 12.8333H20.8333C21.567 12.8333 22.1667 12.2337 22.1667 11.5V7.16667C22.1667 6.433 21.567 5.83333 20.8333 5.83333H11.6667"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold font-display text-foreground">
        AmplifyAI
      </span>
    </div>
  );
};

export default Logo;

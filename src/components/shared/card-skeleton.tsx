import { cn } from "@/lib/utils";

type CardSkeletonProps = {
  count?: number;
  className?: string;
};

export function CardSkeleton({ count = 6, className }: CardSkeletonProps) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2 xl:grid-cols-3", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="overflow-hidden rounded-organic border border-white/10 bg-guapi-night/50"
          aria-hidden="true"
        >
          <div className="h-44 animate-pulse bg-white/10" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-1/2 animate-pulse rounded bg-white/10" />
            <div className="h-3 w-full animate-pulse rounded bg-white/10" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-white/10" />
            <div className="h-8 w-1/3 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

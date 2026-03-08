import { CardSkeleton } from "@/components/shared/card-skeleton";

export default function Loading() {
  return (
    <section className="container-guapi py-16">
      <div className="mb-6 h-8 w-64 animate-pulse rounded bg-white/10" />
      <div className="mb-10 h-4 w-full max-w-2xl animate-pulse rounded bg-white/10" />
      <CardSkeleton count={6} />
    </section>
  );
}

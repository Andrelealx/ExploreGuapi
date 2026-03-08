import { CardSkeleton } from "@/components/shared/card-skeleton";

export default function AttractionsLoading() {
  return (
    <section className="container-guapi py-14">
      <CardSkeleton count={9} />
    </section>
  );
}

import { CardSkeleton } from "@/components/shared/card-skeleton";

export default function ItinerariesLoading() {
  return (
    <section className="container-guapi py-14">
      <CardSkeleton count={5} className="xl:grid-cols-1" />
    </section>
  );
}

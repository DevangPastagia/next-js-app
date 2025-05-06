import { notFound } from "next/navigation";

export default function review({
  params,
}: {
  params: { id: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }

  return (
    <>
      <h1>Welcome to review page</h1>
      <p>
        The review number is {params.reviewId} of product {params.id}
      </p>
    </>
  );
}

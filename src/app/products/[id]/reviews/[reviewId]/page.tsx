import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function review({
  params,
}: {
  params: { id: string; reviewId: string };
}) {
  const param = await params;
  const id = param.id;
  const reviewId = param.reviewId;

  // Simulate a random error
  const randomError = getRandomInt(10);
  if (randomError === 1) {
    throw new Error("Error occurred while fetching the review");
  }

  if (parseInt(reviewId) > 1000) {
    return notFound();
  }

  return (
    <>
      <h1>Welcome to review page</h1>
      <p>
        The review number is {reviewId} of product {id}
      </p>
    </>
  );
}

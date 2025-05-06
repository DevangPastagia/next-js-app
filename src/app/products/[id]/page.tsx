export default function detail({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Product Detail page.</h1>
      <p>The product number is {params.id} </p>
    </>
  );
}

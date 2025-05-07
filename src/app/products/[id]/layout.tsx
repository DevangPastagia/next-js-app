export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Featured Product</h2>
      {children}
    </>
  );
}

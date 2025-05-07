export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Auth Inner layout</h2>
      {children}
    </>
  );
}

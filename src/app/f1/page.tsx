import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>Page F1</h1>
      <div>
        <Link href="/f1/f2">Go to F2</Link>
      </div>
    </div>
  );
}

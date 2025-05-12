import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-2">
        <li className="p-2 bg-gray-100 rounded">Notification 1</li>
        <li className="p-2 bg-gray-100 rounded">Notification 2</li>
        <li className="p-2 bg-gray-100 rounded">Notification 3</li>
      </ul>
      <Link href="/complex-dashboard/archived"> Archived </Link>
    </Card>
  );
}

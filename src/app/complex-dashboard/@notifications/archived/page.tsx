import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Archived Notifications</h2>
      <ul className="space-y-2">
        <li className="p-2 bg-gray-100 rounded">Archived Notification 1</li>
        <li className="p-2 bg-gray-100 rounded">Archived Notification 2</li>
        <li className="p-2 bg-gray-100 rounded">Archived Notification 3</li>
      </ul>
      <Link href="/complex-dashboard"> Back to Notifications </Link>
    </Card>
  );
}

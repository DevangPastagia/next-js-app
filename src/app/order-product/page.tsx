"use client";

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();
  const handleOrder = () => {
    console.log("Order placed!");
    router.push("/");
  };

  return (
    <div>
      <h1>Order Product</h1>
      <p>Order product page content goes here.</p>
      <button className="bg-primary-900" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

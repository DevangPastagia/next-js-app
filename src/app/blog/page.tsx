import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "My Blog",
  },
  description: "This is blog page",
};

export default function blog() {
  return <h1>My Blog</h1>;
}

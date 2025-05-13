import Link from "next/link";
import { wonderImages, type WonderImage } from "./faker/wonders";
import Image from "next/image";

export default function PhotoFeed() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Photo Feed</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wonderImages.map((image: WonderImage) => (
            <Link key={image.id} href={`/photo-feed/${image.id}`}>
              <Image
                src={image.src}
                alt={image.name}
                className="object-cover rounded-lg aspect-square w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

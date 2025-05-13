import Link from "next/link";
import { wonderImages, type WonderImage } from "../faker/wonders";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function WonderImage({ params }: Props) {
  const paramData = await params;
  const paramId = paramData.id;

  const image = wonderImages.find((image) => image.id.toString() === paramId);

  return image ? (
    <div className="container mx-auto">
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Photo Feed</h1>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={image.src}
            alt={image.name}
            className="object-cover rounded-lg aspect-square w-full h-64 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-4">{image.name}</h2>
          <p className="text-lg mt-2">Photographer: {image.photographer}</p>
          <p className="text-lg mt-2">Location: {image.location}</p>
          <Link href="/photo-feed">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Go back to Photo Feed
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mx-auto">
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Image not found</h1>
        <Link href="/photo-feed">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Go back to Photo Feed
          </button>
        </Link>
      </div>
    </div>
  );
}

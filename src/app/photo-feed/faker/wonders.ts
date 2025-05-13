import { StaticImageData } from "next/image";
import photo1 from "../photos/uifaces-human-image (1).jpg";
import photo2 from "../photos/uifaces-human-image (2).jpg";
import photo3 from "../photos/uifaces-human-image (3).jpg";
import photo4 from "../photos/uifaces-human-image (4).jpg";
import photo5 from "../photos/uifaces-human-image (5).jpg";
import photo6 from "../photos/uifaces-human-image (6).jpg";
import photo7 from "../photos/uifaces-human-image (7).jpg";

export type WonderImage = {
  id: number;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

export const wonderImages: WonderImage[] = [
  {
    id: 1,
    name: "Wonder 1",
    src: photo1,
    photographer: "Photographer 1",
    location: "Location 1",
  },
  {
    id: 2,
    name: "Wonder 2",
    src: photo2,
    photographer: "Photographer 2",
    location: "Location 2",
  },
  {
    id: 3,
    name: "Wonder 3",
    src: photo3,
    photographer: "Photographer 3",
    location: "Location 3",
  },
  {
    id: 4,
    name: "Wonder 4",
    src: photo4,
    photographer: "Photographer 4",
    location: "Location 4",
  },
  {
    id: 5,
    name: "Wonder 5",
    src: photo5,
    photographer: "Photographer 5",
    location: "Location 5",
  },
  {
    id: 6,
    name: "Wonder 6",
    src: photo6,
    photographer: "Photographer 6",
    location: "Location 6",
  },
  {
    id: 7,
    name: "Wonder 7",
    src: photo7,
    photographer: "Photographer 7",
    location: "Location 7",
  },
];

import {StaticImageData} from "next/image";

export type Image = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type PhotoPersonProps = {
  photo: Image;
};

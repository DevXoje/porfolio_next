import { Image } from "./Image";

export type ProjectProps = {
  props: Project;
};
export type Project = {
  title: string;
  deployUrl: string;
  repositoryUrl: string;
  date: string;
  description: string;
  image: Image;
};
export type ProjectGalleryProps = {
  props: ProjectGallery;
};
export type ProjectGallery = {
  items: ProjectProps[];
};

import { Link } from "./Link";
import { Image } from "./Image";

export type Hero = {
  title: string;
  description: string;
  image: Image;
  link: Link;
};
export type HeroProps = {
  props: Hero;
};

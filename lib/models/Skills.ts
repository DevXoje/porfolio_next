export type Skill = {
  title: string;
  body: string;
  icon: JSX.Element;
};

export type SkillProps = {
  props: Skill;
};
export type SkillGalleryProps = {
  props: Gallery;
};
export type Gallery = {
  title: string;
  items: SkillProps[];
};

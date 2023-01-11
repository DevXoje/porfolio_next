import { Contact, PortfolioProps } from "./models/Portfolio";
import photo from "./assets/person.png";
import * as React from "react";
import { Gallery } from "./models/Skills";
import { ProjectGallery } from "./models/Project";

const softSkillsData: Gallery = {
  title: "soft skills",
  items: [
    {
      props: {
        title: "titulo1",
        body: "cuerpo1",
        icon: <div />,
      },
    },
    {
      props: {
        title: "titulo2",
        body: "cuerpo1",
        icon: <div />,
      },
    },
    {
      props: {
        title: "titulo3",
        body: "cuerpo1",
        icon: <div />,
      },
    },
  ],
};
const projectsData: ProjectGallery = {
  items: [
    {
      props: {
        title: "Featured post",

        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: {
          //src: "https://source.unsplash.com/random",
          src: photo,
          alt: "Image Text",
        },

        deployUrl: "",
        repositoryUrl: "",
      },
    },
    {
      props: {
        title: "Post title",
        date: "Nov 11",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: {
          //src: "https://source.unsplash.com/random",
          src: photo,
          alt: "Image Text",
        },

        deployUrl: "",
        repositoryUrl: "",
      },
    },
  ],
};
const contactData: Contact = {
  name: "xoje",
  age: 28,
  email: "vilchessanchezjose@gmail.com",
  phone: "622721994",
  photo: {
    src: photo,
    alt: "foto principal de Xoje Developer",
  },
  description: {
    title: "Titulazo xoje porfoloio",
    paragraphs: [
      "Donec iaculis dictum nisi nec consectetur. Phasellus eget pretium tortor. Aliquam ut tempor sapien. Donec blandit vehicula suscipit.",
      "Proin placerat, magna sed tristique placerat, ligula magna pellentesque ligula, non fermentum libero magna sit amet dui. Quisque suscipit felis ut mattis lacinia. Nam vel nunc ornare, venenatis felis id, bibendum nunc. Curabitur interdum mi sit amet quam eleifend, sed lacinia tellus viverra. Mauris non venenatis augue. Proin vehicula venenatis ligula non vulputate. Praesent rhoncus lacus ut consectetur fringilla.",
    ],
  },
  message: {
    subject: "Hablemos",
    content: "Contactame",
  },
  linkedin: "https://www.linkedin.com/in/jose-vilches-sanchez/",
};
export const XojePorfolioData: PortfolioProps = {
  props: {
    contact: contactData,
    softSkills: { props: softSkillsData },
    hardSkills: { props: softSkillsData },
    projects: {
      props: projectsData,
    },
  },
};

/*const portfolio: PortfolioProps = {
  props: {
    contact: {
      name: "xoje",
      email: "vilchessanchezjose@gmail.com",
      phone: "622721994",
      photo: {
        src: photo,
        alt: "",
      },
      description: {
        title: "Titulazo xoje porfoloio",
        paragraphs: [
          "Donec iaculis dictum nisi nec consectetur. Phasellus eget pretium tortor. Aliquam ut tempor sapien. Donec blandit vehicula suscipit.",
          "Proin placerat, magna sed tristique placerat, ligula magna pellentesque ligula, non fermentum libero magna sit amet dui. Quisque suscipit felis ut mattis lacinia. Nam vel nunc ornare, venenatis felis id, bibendum nunc. Curabitur interdum mi sit amet quam eleifend, sed lacinia tellus viverra. Mauris non venenatis augue. Proin vehicula venenatis ligula non vulputate. Praesent rhoncus lacus ut consectetur fringilla.",
        ],
      },
      message: {
        subject: "Hablemos",
        content: "Contactame",
      },
      linkedin: "https://www.linkedin.com/in/jose-vilches-sanchez/",
    },
    softSkills: {
      props: {
        title: "soft skills",
        items: [
          {
            props: {
              title: "titulo1",
              body: "cuerpo1",
              icon: <FcElectroDevices />,
            },
          },
          {
            props: {
              title: "titulo2",
              body: "cuerpo1",
              icon: <FcElectroDevices />,
            },
          },
          {
            props: {
              title: "titulo3",
              body: "cuerpo1",
              icon: <FcElectroDevices />,
            },
          },
        ],
      },
    },
    hardSkills: {
      props: {
        title: "soft skills",
        items: [
          {
            props: {
              title: "titulo1",
              body: "cuerpo1",
              icon: <FcElectroDevices />,
            },
          },
        ],
      },
    },
    projects: {
      props: {
        items: [
          {
            title: "Featured post",
            date: "Nov 12",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content.",
            image: {
              src: "https://source.unsplash.com/random",
              alt: "Image Text",
            },

            deployUrl: "",
            repositoryUrl: "",
          },
          {
            title: "Post title",
            date: "Nov 11",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content.",
            image: {
              src: "https://source.unsplash.com/random",
              alt: "Image Text",
            },

            deployUrl: "",
            repositoryUrl: "",
          },
        ],
      },
    },
  },
};*/

/*const softSkills: SkillGalleryProps = {
  items: [
    {
      title: "titulo1",
      body: "cuerpo1",
      icon: <FcElectroDevices />,
    },
  ],
  title: "soft skills",
};
const contact: Contact = {
  name: "xoje",
  email: "vilchessanchezjose@gmail.com",
  phone: "622721994",
  photo: "../../assets/person.png",
};
const projects: ProjectGalleryProps = {
  items: [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: {
        src: "https://source.unsplash.com/random",
        alt: "Image Text",
      },

      deployUrl: "",
      repositoryUrl: "",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: {
        src: "https://source.unsplash.com/random",
        alt: "Image Text",
      },

      deployUrl: "",
      repositoryUrl: "",
    },
  ],
};*/

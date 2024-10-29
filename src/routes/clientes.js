const clientes = [
  /* 1- Clarin */
  {
    id: 1,
    cliente: "clarin",
    titulo: "Clarín",
    cantImagen: 10,
    descripcionText: {
      descTitulo: "Hombres de Olé bajo el brazo",
      descParrafo:
        "Young & Rubicam nos encargó una serie de Brand Games para la campaña online: #HombresDeOleBajoElBrazo. Siguiendo la comunicación, desarrollamos el look & feel y la jugabilidad de los mismos para que reflejen ese hombre distinto, ducho, perseverante; como los lectores de Olé.",
    },
    descripcionCombo: {
      comboTitulo: "Grupo Clarín",
      linea1: "Diario deportivo Olé",
      linea2: "Landing Web",
      linea3: "+ Brand Games",
      linea4: "+ Ui/UX Design",
      linea5: "+ Programing",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto1/fotoCombo0.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto1/fotoCombo2.png`,
        pant: "d",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto1/fotoCombo3.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 3,
      proyectoRelacionado: "nissan",
    },
  },

  /* 2- Mondelez */
  {
    id: 2,
    cliente: "mondelez",
    titulo: "Mondelẽz",
    cantImagen: 9,
    descripcionText: {
      descTitulo: "Heartless, but with Peanuts",
      descParrafo: `Ogilvy's Argentine entrusted us with producing an immersive experience for the activation of Shot chocolates. The development included an app for stands and custom facial expression recognition software for this campaign.
      #NoTieneCorazonTieneMani`,
    },

    descripcionCombo: {
      comboTitulo: "Mondelẽz",
      linea1: "SHOT Chocolates",
      linea2: "BTL Activation",
      linea3: "+ Facial Recognition App",
      linea4: "+ Social Video ADs",
      linea5: "",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto2/fotoCombo1.png`,
        pant: "m",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto2/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto2/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 1,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "clarin",
    },
  },

  /* 3- Nissan */
  {
    id: 3,
    cliente: "nissan",
    titulo: "NISSAN",
    cantImagen: 8,
    descripcionText: {
      descTitulo: "“Ready for Any Challenge”",
      descParrafo: `TBWA Mexico entrusted us with creating a Virtual Reality experience to showcase the new features of the Frontier NP300. Beyond the immersive experience, users can access hot spots within the app that reveal external features and equipment specifications. #NP300Frontier`,
    },

    descripcionCombo: {
      comboTitulo: "NISSAN",
      linea1: "NP300 Frontier",
      linea2: "Launch Site",
      linea3: "+ Mobile VR Experience",
      linea4: "+ 3D Production",
      linea5: "+ Game engine",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto3/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto3/fotoCombo2.png`,
        pant: "d",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto3/foto3.png`,
        pant: "onlyMovile",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 1,
      proyectoRelacionado: "clarin",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 4 - Cocacola */
  {
    id: 4,
    cliente: "cocacola",
    titulo: "Coca Cola",
    cantImagen: 6,
    descripcionText: {
      descTitulo: "USB CAN Energy Drink",
      descParrafo: `For Coca-Cola's Gladiator energy drink, DDB Mexico engaged us to develop a web application. Utilizing the packaging graphics designed by Shepard Fairey (a.k.a. OBEY), users can access their cloud-uploaded files through a can recognition feature.`,
    },

    descripcionCombo: {
      comboTitulo: "Coca Cola",
      linea1: "GLADIATOR Energy Drink",
      linea2: "Campaign Web Site",
      linea3: "+ Can Recognition Web App",
      linea4: "+ Ui/UX Design",
      linea5: "+ Programing",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto4/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto4/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto4/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 5 - Molinos */
  {
    id: 5,
    cliente: "molinos",
    titulo: "Molinos",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "Power Tattoos",
      descParrafo: `Commissioned by GREY, we produced a game for the campaign "The fight for the last Patita". Drawing inspiration from classic arm wrestling, we designed appealing characters targeted at the brand's audience, featured both in the game and as washable tattoos in product packs.`,
    },

    descripcionCombo: {
      comboTitulo: "Molinos",
      linea1: "Patitas",
      linea2: "Brand Site",
      linea3: "+ Web Brand Game",
      linea4: "+ Design & Illustration",
      linea5: "+ Programing",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto5/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto5/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto5/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 6 - Unilever */
  {
    id: 6,
    cliente: "unilever",
    titulo: "Unilever",
    cantImagen: 12,
    descripcionText: {
      descTitulo: "Rexona Men Body Road",
      descParrafo: `Para Ponce, la agencia creativa global de Rexona, diseñamos y producimos un brand game educativo sobre la correcta aplicación corporal de los desodorantes Rexona Men. Los usuarios rociaban desodorante sobre los personajes 3D siguiendo patrones que se volvían cada vez más complejos.`,
    },

    descripcionCombo: {
      comboTitulo: "Unilever",
      linea1: "Rexona Men",
      linea2: "Landings",
      linea3: "+ Ui/UX Design",
      linea4: "+ Brand Games",
      linea5: "+ Rich Media",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto6/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto6/fotoCombo2.png`,
        pant: "m",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto6/fotoCombo3.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 7 - Fiat */
  {
    id: 7,
    cliente: "fiat",
    titulo: "FIAT",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "“Stylish Parenting”",
      descParrafo:
        "Supporting the client's brief, we designed a website blending disruptive grid design with classic content. The Rich Media campaign conveys that the 500L retains style and aspiration in its family version, emphasizing that parenthood doesn't mean compromising on a stylish car.",
    },

    descripcionCombo: {
      comboTitulo: "FIAT",
      linea1: "“Stylish Parenting”",
      linea2: "Car product Web Site",
      linea3: "+ Ui/UX Design",
      linea4: "+ Programming",
      linea5: "+ Rich Media",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto7/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto7/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto7/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 1,
      proyectoRelacionado: "clarin",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "fiat",
    },
  },

  /* 8 -Whirlpool */
  {
    id: 8,
    cliente: "whirlpool",
    titulo: "Whirlpool",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "New line",
      descParrafo: `Our digital area maintains websites with new content updates, platform upgrades, and security. The Rich Media campaign announces new launches, and we engage on social networks through our community managers.
      #WhirlpoolRetro #SaliATuCasa`,
    },

    descripcionCombo: {
      comboTitulo: "Whirlpool",
      linea1: "New line",
      linea2: "Bran Site Update",
      linea3: "+ Digital Design",
      linea4: "+ Community Management",
      linea5: "+ Video ADs",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto8/fotoCombo1.png`,
        pant: "m",
      },
      // img2: {
      //   url: `/imgClientesSitioEzense/fotoClientes/proyecto8/fotoCombo2.png`,
      //   pant: "m",
      // },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto8/fotoCombo3.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 9 -Estrada */
  {
    id: 9,
    cliente: "estrada",
    titulo: "Estrada",
    cantImagen: 5,
    descripcionText: {
      descTitulo: "Rivadavia 3D",
      descParrafo: `Desarrollamos una Aplicación de Realidad Aumentada que detecta cualquier producto de la marca y despliega contenido de clases sobre estos. Para la difusión de la aplicación entre alumnos de primaria, target principal de la marca, se generó una campaña con influencers destacando la utilidad de la App.`,
    },

    descripcionCombo: {
      comboTitulo: "Estrada",
      linea1: "Rivadavia 3D",
      linea2: "Augmented Reality APP",
      linea3: "+ 3D Modeling",
      linea4: "+ Game engine",
      linea5: "+ Influencers Campaign",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto9/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto9/fotoCombo2.png`,
        pant: "m",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto9/fotoCombo3.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 10 -disney baby */
  {
    id: 10,
    cliente: "disneyBaby",
    titulo: "Disney baby",
    cantImagen: 4,
    descripcionText: {
      descTitulo: "Social HUB",
      descParrafo: `We designed and programmed a Social HUB to aggregate posts from the brand's social media profiles. Additionally, we created short films and animations using stop motion to generate co-branding and integrate characters into the Disney Baby social media universe.`,
    },

    descripcionCombo: {
      comboTitulo: "Disney baby",
      linea1: "Disney Baby Social HUB",
      linea2: "Main development",
      linea3: "+ Website",
      linea4: "+ Programming",
      linea5: "+ Rich Media",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto10/fotoCombo1.png`,
        pant: "m",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto10/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto10/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 11 - Iplan */
  {
    id: 11,
    cliente: "iplan",
    titulo: "IPLAN",
    cantImagen: 4,
    descripcionText: {
      descTitulo: "Corporate Website + APP",
      descParrafo: `For one of the country's leading internet providers, we developed this project in Drupal with the highest security standards. Our digital maintenance area handles content updates and integrity checks for all our projects.
      `,
    },

    descripcionCombo: {
      comboTitulo: "IPLAN",
      linea1: "IPLAN + Liv",
      linea2: "Corporate Website + APP",
      linea3: "+ IT Maintenance",
      linea4: "+ Ui/UX Design",
      linea5: "+ Web Production",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto11/fotoCombo1.png`,
        pant: "m",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto11/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto11/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 12 - Givaudan */
  {
    id: 12,
    cliente: "givaudan",
    titulo: "Givaudan",
    cantImagen: 6,
    descripcionText: {
      descTitulo: "Health and Wellness Symposium",
      descParrafo: `We managed all digital communications and event organization for Argentina, Brazil, Mexico, and Colombia. Activities included creating a website featuring event speakers, a survey app for attendees, and multimedia activities during breaks.`,
    },

    descripcionCombo: {
      comboTitulo: "Givaudan",
      linea1: "Taste Solutions",
      linea2: "Health & Wellness Symposium",
      linea3: "+ Regional event coverage",
      linea4: "+ Website",
      linea5: "+ Media Activation",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto12/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto12/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto12/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 13 - Procter & Gamble */
  {
    id: 13,
    cliente: "procter",
    titulo: "Procter",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "“Let the Hugs Begin”",
      descParrafo: `Commissioned by Del Campo Saatchi & Saatchi, Argentina's branch of Publicis, we produced the digital campaign for the World Cup. Actions included creating a Brand Game and coordinating the contest and social media content for Head & Shoulders in Latin America.`,
    },

    descripcionCombo: {
      comboTitulo: "Procter & Gamble",
      linea1: "Head & Shoulders",
      linea2: "“Let the Hugs Begin”",
      linea3: "+ Brand Game",
      linea4: "+ Rich Media",
      linea5: "+ Community Management",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto13/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto13/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto13/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 14 - Beiersdorf*/
  {
    id: 14,
    cliente: "beiersdorf",
    titulo: "Beiersdorf",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "NIVEA 100 Years",
      descParrafo: `Draft FCB nos encargo la producción digital de esta campaña para Nivea 100 Años.Las acciones incluyeron la realización de un Social Game junto con la promoción y articulación del concurso y los contenidos en las redes sociales de la marca Nivea para Argentina.`,
    },

    descripcionCombo: {
      comboTitulo: "Beiersdorf",
      linea1: "NIVEA",
      linea2: "NIVEA 100 años",
      linea3: "+ Social Game",
      linea4: "+ Rich Media",
      linea5: "+ Community Manager",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto14/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto14/fotoCombo2.png`,
        pant: "m",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto14/fotoCombo3.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 15 - Peugeot*/
  {
    id: 15,
    cliente: "peugeot",
    titulo: "Peugeot",
    cantImagen: 4,
    descripcionText: {
      descTitulo: "“Your Next Conquest”",
      descParrafo: `For the Peugeot 308 campaign, inspired by Argentine celebrities, HAVAS, through its local agency, tasked us with digital production. Actions included creating a website, a YouTube initiative, rich media production, and coordinating the contest and content with a banner ad campaign.`,
    },

    descripcionCombo: {
      comboTitulo: "Peugeot",
      linea1: "308",
      linea2: "“Your Next Conquest”",
      linea3: "+ Hot Site",
      linea4: "+ Celebrities Campaign",
      linea5: "+ Community Management",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto15/fotoCombo1.png`,
        pant: "m",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto15/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto15/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 16 - Televisa*/
  {
    id: 16,
    cliente: "televisa",
    titulo: "Televisa",
    cantImagen: 4,
    descripcionText: {
      descTitulo: "“New Technologies in Mexico”",
      descParrafo: `For this major technology event in Mexico City, we created a site with user login and video streaming. We developed an app with a schedule to view speakers like Wozniak, Moby, and Cameron, along with useful information for attendees like maps, schedules, and QR passes for talks.`,
    },

    descripcionCombo: {
      comboTitulo: "Televisa",
      linea1: "TAG DF",
      linea2: "“New Technologies in Mexico”",
      linea3: "+ Website",
      linea4: "+ Mobile App",
      linea5: "+ Video Streaming",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto16/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto16/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto16/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 17 - GM*/
  {
    id: 17,
    cliente: "gm",
    titulo: "GM",
    cantImagen: 13,
    descripcionText: {
      descTitulo: "Car launch websites",
      descParrafo: `orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló.`,
    },

    descripcionCombo: {
      comboTitulo: "GM",
      linea1: "Chevrolet",
      linea2: "Car launch websites",
      linea3: "+ Hot Sites",
      linea4: "+ Brand games",
      linea5: "+ Rich Media",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto17/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto17/fotoCombo2.png`,
        pant: "m",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto17/fotoCombo3.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 18 - Turner*/
  {
    id: 18,
    cliente: "turner",
    titulo: "Turner",
    cantImagen: 10,
    descripcionText: {
      descTitulo: "Series launch websites",
      descParrafo: `orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló.`,
    },

    descripcionCombo: {
      comboTitulo: "Turner",
      linea1: "i-Sat / Space",
      linea2: "Series launch websites",
      linea3: "+ Ui Design",
      linea4: "+ Websites",
      linea5: "+ Brand HTML Games",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto18/fotoCombo1.png`,
        pant: "m",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto18/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto18/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 19 - NIKE*/
  {
    id: 19,
    cliente: "nike",
    titulo: "NIKE",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "AP9 Agustín Pichot",
      descParrafo: `For the launch of AP9, a clothing line inspired by Agustin Pichot, NIKE LA and remix commissioned us to design a Hot Site. The project included managing a contest and promoting it, as well as distributing prizes on Agustin Pichot's social networks.
      #AP9`,
    },

    descripcionCombo: {
      comboTitulo: "NIKE",
      linea1: "AP9",
      linea2: "AP9 Agustín Pichot",
      linea3: "+ Hot Site",
      linea4: "+ Community Management",
      linea5: "+ Event coverage",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto19/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto19/fotoCombo2.png`,
        pant: "d",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto19/fotoCombo0.png`,
        pant: "onlyMovile",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 20 -Mc Donalds*/
  {
    id: 20,
    cliente: "mcdonalds",
    titulo: "Mc Donalds",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "Line Activations in Chile",
      descParrafo: `In collaboration with Hawaii production, we developed a printer activated by a unique hashtag for the launch. We handled the production of the activation and captured video and image content for McDonald's Chile's social media.
      #PlacerEnCrear`,
    },

    descripcionCombo: {
      comboTitulo: "Mc Donald’s",
      linea1: "Signature",
      linea2: "Line Activations in Chile",
      linea3: "+ BTL Action",
      linea4: "+ Instagram Printer",
      linea5: "+ Event Coverage",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto20/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto20/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto20/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 21 -Philip Starck*/
  {
    id: 21,
    cliente: "philip",
    titulo: "Philip Starck",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "Yoo Punta del Este",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "Philip Starck",
      linea1: "Yoo Punta del Este",
      linea2: "Real State Website",
      linea3: "+ Ui/Ux Design",
      linea4: "+ Web Programming",
      linea5: "+ Rich Media",
    },

    imgCombo: {
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto21/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto21/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto21/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 22 -ABInBev*/
  {
    id: 22,
    cliente: "abinbev",
    titulo: "ABInBev",
    cantImagen: 4,
    descripcionText: {
      descTitulo: "Stella Artois",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "ABInBev",
      linea1: "Yoo Punta del Este",
      linea2: "Real State Website",
      linea3: "+ Ui/Ux Design",
      linea4: "+ Web Programming",
      linea5: "+ Rich Media",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto22/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto22/fotoCombo2.png`,
        pant: "m",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto22/fotoCombo3.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 23 -Disney*/
  {
    id: 23,
    cliente: "disney",
    titulo: "Disney",
    cantImagen: 11,
    descripcionText: {
      descTitulo: "Movie Launch Sites",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "Disney",
      linea1: "Movie Launch Sites",
      linea2: "Avant premiere actions",
      linea3: "+ Website",
      linea4: "+ Brand Games",
      linea5: "+ Design & Programming",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto23/fotoCombo1.png`,
        pant: "m",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto23/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto23/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 24 - Kimberly-Clark */
  {
    id: 24,
    cliente: "kimberly",
    titulo: "Kimberly-Clark",
    cantImagen: 6,
    descripcionText: {
      descTitulo: "Crea tu Make Up",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "Kimberly-Clark ",
      linea1: "Cotex",
      linea2: "Crea tu Make Up",
      linea3: "+ Brand Game",
      linea4: "+ Ui/Ux Design",
      linea5: "+ Programming",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto24/fotoCombo1.png`,
        pant: "d",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto24/fotoCombo0.png`,
        pant: "onlyMovile",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto24/fotoCombo2.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 25 - PEPSICO */
  {
    id: 25,
    cliente: "pepsico",
    titulo: "PEPSICO",
    cantImagen: 6,
    descripcionText: {
      descTitulo: "H2oh! Club",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "PEPSICO",
      linea1: "H2oh!",
      linea2: "H2oh! Club",
      linea3: "+ Website",
      linea4: "+ Ui/Ux Design",
      linea5: "+ Programming",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto25/fotoCombo1.png`,
        pant: "d",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto25/fotoCombo2.png`,
        pant: "m",
      },
      img3: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto25/fotoCombo3.png`,
        pant: "m",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },

  /* 26 - paco rabanne */
  {
    id: 26,
    cliente: "pacoRabanne",
    titulo: "paco rabanne",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "Black XS Live Sound: Allison",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "paco rabanne",
      linea1: "Black XS",
      linea2: "Live Sound: Allison",
      linea3: "+ Ui/Ux Design",
      linea4: "+ Programming",
      linea5: "+ Rich Media",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto26/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto26/fotoCombo2.png`,
        pant: "d",
      },
      img0: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto26/fotoCombo0.png`,
        pant: "onlyMovile",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },
  /* 27 - knorr */
  {
    id: 27,
    cliente: "knorr",
    titulo: "Knorr",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "Black XS Live Sound: Allison",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "Knorr",
      linea1: "Quick",
      linea2: "Antipicoteo",
      linea3: "+ 2nd service",
      linea4: "+ 3rd service",
      linea5: "+ 4th service",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto27/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto27/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },
  /* 28 - The Clorox Company*/
  {
    id: 28,
    cliente: "theCloroxCompany",
    titulo: "The Clorox Company",
    cantImagen: 7,
    descripcionText: {
      descTitulo: "Black XS Live Sound: Allison",
      descParrafo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
    },

    descripcionCombo: {
      comboTitulo: "The Clorox Company",
      linea1: "Cleared & Glad",
      linea2: "Rich Media Campaign",
      linea3: "+ Banners design",
      linea4: "+ HTML5 Banners",
      linea5: "+ Character design",
    },

    imgCombo: {
      img1: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto28/fotoCombo1.png`,
        pant: "m",
      },
      img2: {
        url: `/imgClientesSitioEzense/fotoClientes/proyecto28/fotoCombo2.png`,
        pant: "d",
      },
    },

    proyectoRelacionado1: {
      idProyectoRelacionado: 7,
      proyectoRelacionado: "fiat",
    },

    proyectoRelacionado2: {
      idProyectoRelacionado: 2,
      proyectoRelacionado: "mondelez",
    },
  },
];

function getClienteById(nombreCliente) {
  return clientes.find((cliente) => cliente.cliente === nombreCliente);
}

export { clientes, getClienteById };

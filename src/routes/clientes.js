
const clientes = [

  /* 1- Clarin */
  {
    id:1,
    cliente:"clarin",
    titulo:"Clarín",
    cantImagen:10,
    descripcionText:{
      descTitulo:"Hombres de Olé bajo el brazo",
      descParrafo:"Young & Rubicam nos encargó una serie de Brand Games para la campaña online: #HombresDeOleBajoElBrazo. Siguiendo la comunicación, desarrollamos el look & feel y la jugabilidad de los mismos para que reflejen ese hombre distinto, ducho, perseverante; como los lectores de Olé.",
    },
   
    descripcionCombo:{
      comboTitulo:"Grupo Clarín",
      linea1:"Diario deportivo Olé",
      linea2:"Landing Web",
      linea3:"+ Brand Games",
      linea4:"+ Ui/UX Design",
      linea5:"+ Programing",
    },

    imgCombo:{
      img1: `/ezenseSite9/src/assets/fotoClientes/proyecto1/fotoCombo1.png`,
      img2: `/ezenseSite9/src/assets/fotoClientes/proyecto1/fotoCombo2.png`,
      img3: `/ezenseSite9/src/assets/fotoClientes/proyecto1/fotoCombo3.png`,
    },
    
    proyectoRelacionado1:{
      idProyectoRelacionado:1,
      proyectoRelacionado:'fiat',     
    },

    proyectoRelacionado2:{
      idProyectoRelacionado:2,
      proyectoRelacionado:'clarin',
     
     
    }

  },

  /* 2- Mondelez */
  {
    id:2,
    cliente:"mondelez",
    titulo:"Mondelẽz",
    cantImagen:9,
    descripcionText:{
      descTitulo:"Heartless, but with Peanuts",
      descParrafo: `Ogilvy's Argentine entrusted us with producing an immersive experience for the activation of Shot chocolates. The development included an app for stands and custom facial expression recognition software for this campaign.
      #NoTieneCorazonTieneMani`,
    },
   
    descripcionCombo:{
      comboTitulo:"Mondelẽz",
      linea1:"SHOT Chocolates",
      linea2:"BTL Activation",
      linea3:"+ Facial Recognition App",
      linea4:"+ Social Video ADs",
      linea5:"",
    },

    imgCombo:{
      img1: `/ezenseSite9/src/assets/fotoClientes/proyecto2/fotoCombo1.png`,
      img2: `/ezenseSite9/src/assets/fotoClientes/proyecto2/fotoCombo2.png`,
     
    },
    
    proyectoRelacionado1:{
      idProyectoRelacionado:1,
      proyectoRelacionado:'fiat',     
    },

    proyectoRelacionado2:{
      idProyectoRelacionado:2,
      proyectoRelacionado:'clarin',
     
     
    }

  },

  /* 3- Nissan */
  {
    id:3,
    cliente:"nissan",
    titulo:"NISSAN",
    cantImagen:8,
    descripcionText:{
      descTitulo:"“Ready for Any Challenge”",
      descParrafo: `TBWA Mexico entrusted us with creating a Virtual Reality experience to showcase the new features of the Frontier NP300. Beyond the immersive experience, users can access hot spots within the app that reveal external features and equipment specifications. #NP300Frontier`,
    },
   
    descripcionCombo:{
      comboTitulo:"NISSAN",
      linea1:"NP300 Frontier",
      linea2:"Launch Site",
      linea3:"+ Mobile VR Experience",
      linea4:"+ 3D Production",
      linea5:"+ Game engine",
    },

    imgCombo:{
      img1: `/ezenseSite9/src/assets/fotoClientes/proyecto3/fotoCombo1.png`,
      img2: `/ezenseSite9/src/assets/fotoClientes/proyecto3/fotoCombo2.png`,
      img3: `/ezenseSite9/src/assets/fotoClientes/proyecto3/fotoCombo3.png`,
     
    },
    
    proyectoRelacionado1:{
      idProyectoRelacionado:7,
      proyectoRelacionado:'fiat',     
    },

    proyectoRelacionado2:{
      idProyectoRelacionado:2,
      proyectoRelacionado:'mondelez',
    }

  },

  /* 4 - Cocacola */
  {
    id:4,
    cliente:"cocacola",
    titulo:"Coca Cola",
    cantImagen:6,
    descripcionText:{
      descTitulo:"USB CAN Energy Drink",
      descParrafo: `For Coca-Cola's Gladiator energy drink, DDB Mexico engaged us to develop a web application. Utilizing the packaging graphics designed by Shepard Fairey (a.k.a. OBEY), users can access their cloud-uploaded files through a can recognition feature.`,
    },
   
    descripcionCombo:{
      comboTitulo:"Coca Cola",
      linea1:"GLADIATOR Energy Drink",
      linea2:"Campaign Web Site",
      linea3:"+ Can Recognition Web App",
      linea4:"+ Ui/UX Design",
      linea5:"+ Programing",
    },

    imgCombo:{
      img1: `/ezenseSite9/src/assets/fotoClientes/proyecto4/fotoCombo1.png`,
      img2: `/ezenseSite9/src/assets/fotoClientes/proyecto4/fotoCombo2.png`,
     
    },
    
    proyectoRelacionado1:{
      idProyectoRelacionado:7,
      proyectoRelacionado:'fiat',     
    },

    proyectoRelacionado2:{
      idProyectoRelacionado:2,
      proyectoRelacionado:'mondelez',
    }

  },

  /* 7 - Fiat */
   {
      id:7,
      cliente:"fiat",
      titulo:"FIAT",
      cantImagen:7,
      descripcionText:{
        descTitulo:"“Stylish Parenting”",
        descParrafo:"Supporting the client's brief, we designed a website blending disruptive grid design with classic content. The Rich Media campaign conveys that the 500L retains style and aspiration in its family version, emphasizing that parenthood doesn't mean compromising on a stylish car.",
      },
     
      descripcionCombo:{
        comboTitulo:"FIAT",
        linea1:"“Stylish Parenting”",
        linea2:"Car product Web Site",
        linea3:"+ Ui/UX Design",
        linea4:"+ Programming",
        linea5:"+ Rich Media",
      },

      imgCombo:{
        img1: `/ezenseSite9/src/assets/fotoClientes/proyecto7/fotoCombo1.png`,
        img2: `/ezenseSite9/src/assets/fotoClientes/proyecto7/fotoCombo2.png`,
      },
      
      proyectoRelacionado1:{
        idProyectoRelacionado:1,
        proyectoRelacionado:'clarin',
      },
  
      proyectoRelacionado2:{
        idProyectoRelacionado:2,
        proyectoRelacionado:'fiat',
       
      }
  
    },
  
   
  
  
];

function getClienteById (nombreCliente) {
   return clientes.find(cliente => cliente.cliente === nombreCliente);
};


export { clientes, getClienteById };
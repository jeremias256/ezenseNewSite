
const clientes = [

  {
    id:3,
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
    
    proyectoRelacionado1:{
      idProyectoRelacionado:1,
      comboTitulo:"FIAT",
      linea1:"“Stylish Parenting”",
      linea2:"Car product Web Site",
      linea3:"+ Ui/UX Design",
      linea4:"+ Programming",
      linea5:"+ Rich Media",
     
    },

    proyectoRelacionado2:{
      idProyectoRelacionado:2,
      comboTitulo:"Whirlpool",
      linea1:"New line",
      linea2:"Bran Site Update",
      linea3:"+ Digital Design",
      linea4:"+ Community Management",
      linea5:"+ Video ADs",
     
    }

  },


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
      
      proyectoRelacionado1:{
        idProyectoRelacionado:1,
        comboTitulo:"IPLAN",
        linea1:"IPLAN + Liv",
        linea2:"Corporate Website + APP",
        linea3:"+ IT Maintenance",
        linea4:"+ Ui/UX Design",
        linea5:"+ Web Production",
       
      },
  
      proyectoRelacionado2:{
        idProyectoRelacionado:2,
        comboTitulo:"Whirlpool",
        linea1:"New line",
        linea2:"Bran Site Update",
        linea3:"+ Digital Design",
        linea4:"+ Community Management",
        linea5:"+ Video ADs",
       
      }
  
    },
  
   
  
  
];

function getClienteById (nombreCliente) {
   return clientes.find(cliente => cliente.cliente === nombreCliente);
};


export { clientes, getClienteById };
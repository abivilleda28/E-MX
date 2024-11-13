/* Define la clase para usar la fuente Cinzel */
.cinzel-font {
    font-family: "Cinzel", serif;
    font-weight: 700; /* Ajusta el grosor según el estilo que prefieras */
    font-size: 25px;  /* Tamaño de la fuente */
    color: white;     /* Color de texto */
    text-transform: uppercase; /* Si deseas el texto en mayúsculas */
  }
  

  .roboto-medium {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
  }
  
  
/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    list-style: none;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: white;
    text-transform: capitalize;
  }
  
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

.logo-img {
    height: 100px; /* Ajusta el tamaño según tus necesidades */
    width: auto;
    margin-right: 15px; /* Espacio entre la imagen y los enlaces de navegación */
    vertical-align: middle;
  }

/* Estilos del header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  .logo-img {
    width: 50px; /* Ajusta el tamaño de la imagen */
    height: auto;
  }
  
  /* Estilos del Nav */

  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

  nav {
    background: #FFB300;
    height: 80px;
    width: 100%;
  }

  header .logo-img {
    width: 50px; /* Ajusta el tamaño de la imagen */
    height: auto;
}

  label.logo {
    color: black;
    font-size: 25px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
  }
  nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
  }
  nav ul li a {
    color: black;
    font-size: 16px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
  }
  a.active,
  a:hover {
    background: #73C2FB;
    transition: .5s;
  }
  .checkbtn {
    display: none;
    font-size: 30px;
    color: black;
  }
  #check {
    display: none;
  }
  
  @media (max-width: 768px) {
    .checkbtn {
        display: block;
    }

    nav ul li a {
      font-size: 16px;
    }
  }



  /* Estilos de footer */
  .footer {
    background-color: #73C2FB ;
    padding: 80px 0;
  }
  
  .footer-row {
    display: flex;
    flex-wrap: nowrap; /* Mantiene los elementos en una sola fila */
    justify-content: space-between;
  }

  .footer-links ul {
    padding-left: 0;
    list-style-type: none;
}

.footer-links ul li {
    margin: 5px 0;
}

.footer-links h4 {
    margin-bottom: 10px;
}

  .footer-links {
    flex-basis: 25%; /* Ajusta cada columna al 25% del ancho */
    padding: 0 15px; /* Corrección de typo: el padding ahora es válido */
  }
  
  .footer-links h4 {
    font-size: 20px;
    color: black; /* Cambié para mayor contraste */
    margin-bottom: 25px;
    font-weight: 500;
    border-bottom: 2px solid #73C2FB ;
    padding-bottom: 10px;
    display: inline-block;
  }
  
  /* Estilos específicos de la clase inscritos */
  .inscritos {
    font-style: italic;
    text-align: center;
  }
  
  /* Estilos para el contenedor grid */
  .grid-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px; /* Para agregar un poco de espacio entre los items */
}
  }
  
  /* Estilos responsivos */
  @media (max-width: 760px) {
    .grid-container {
        flex-direction: column;
        align-items: center; /* Alineación centrada en pantallas pequeñas */
    }
  
    .grid-item img {
        max-width: 100%; /* Asegura que las imágenes no sobrepasen el contenedor */
    }
}

    .footer-links {
      flex-basis: 100%; /* Cada columna ocupará el ancho completo en pantallas pequeñas */
      margin-bottom: 20px;
    }
  
    .grid-container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  
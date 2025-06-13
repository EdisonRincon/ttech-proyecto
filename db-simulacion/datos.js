
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Granos Básicos", descripcion: "Alimentos secos y nutritivos.", imagen: "img/Granos básicos.jpeg" },
    "102" : { codigo: "102", nombre: "Frutas y Verduras", descripcion: "Productos frescos y saludables.", imagen: "img/Frutas y verduras.jpeg"  },
    "103" : { codigo: "103", nombre: "Bebidas y Licores", descripcion: "Variedad en bebidas y licores.", imagen: "img/Bebidas y licores.jpeg"  },
    "104" : { codigo: "104", nombre: "Aseo personal y Limpieza", descripcion: "Cuidado personal y del hogar.", imagen: "img/Aseo Personal y Limpieza.jpeg"  },
    "105" : { codigo: "105", nombre: "Panadería y Pastelería", descripcion: "Productos horneados y dulces.", imagen: "img/Panadería y Pastelería.jpeg" },
    "106" : { codigo: "106", nombre: "Lácteos y Huevos", descripcion: "Lácteos frescos y nutritivos.", imagen: "img/Lácteos y Huevos.jpeg"  }, 
    "107" : { codigo: "107", nombre: "Carnes y Pescados", descripcion: "Proteínas frescas y variadas.", imagen: "img/Carnes y pescados.jpeg"  }
   
    
};

localStorage.setItem("categorias", JSON.stringify(categorias));

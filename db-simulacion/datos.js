
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

// Inicialización de banners en localStorage
banners = {
    "101" : { codigo: "101", titulo: "Arroz, Frijoles, Lentejas y Más.", subtítulo:"Calidad y economía para tu mesa diaria.",
                descripcion:"Explora nuestra selección de granos secos esenciales para tu alimentación balanceada.", imagen: "img/Granos básicos.jpeg" },
    "102" : { codigo: "102", titulo: "Banano, Tomate, Cebolla y más.", subtítulo:"Frescura y sabor directo del campo.",
                descripcion:"Compra productos frescos como manzanas, zanahorias, lechugas y más, ideales para tu salud.", imagen: "img/Frutas y verduras.jpeg" },   
    "103" : { codigo: "103", titulo: "Jugos, Cervezas, Aguardiente.", subtítulo:"Para compartir, refrescar y celebrar.",
                descripcion:"Gran variedad en refrescos, vinos, energizantes y bebidas tradicionales.", imagen: "img/Bebidas y licores.jpeg" },
    "104" : { codigo: "104", titulo: "Jabones, Cloro, Papel Higiénico.", subtítulo:"Cuidado personal y del hogar siempre a tu alcance.",
                descripcion:"Encuentra productos esenciales para mantener tu casa limpia y tú bien cuidado.", imagen: "img/Aseo Personal y Limpieza.jpeg" },
    "105" : { codigo: "105", titulo: "Pan aliñado, Pandebonos, Tortas.", subtítulo:"Recién horneados, con sabor casero.",
                descripcion:"Disfruta de productos tradicionales y dulces perfectos para cada momento del día.", imagen: "img/Panadería y Pastelería.jpeg" },
    "106" : { codigo: "106", titulo: "Leche, Queso, Yogur y más.", subtítulo:"Nutrición y frescura en cada bocado.",
                descripcion:"Productos lácteos frescos y huevos de calidad para tu alimentación diaria.", imagen: "img/Lácteos y Huevos.jpeg" }, 
    "107" : { codigo: "107", titulo: "Pollo, Res, Pescado Fresco", subtítulo:"Proteínas frescas y variadas para tu mesa cada día.",
                descripcion:"Lleva cortes frescos de carne, pollo, pescado y embutidos para tus comidas favoritas.", imagen: "img/Carnes y pescados.jpeg" }
};
localStorage.setItem("banners", JSON.stringify(banners));

// Inicialización de productos en localStorage
Productos = {
    "1011" : { codigo: "1011", nombre: "Arroz", descripcion: "Arroz por libras", categoria: "101", imagen: "img/Arroz.jpeg", precio:  1950, duración: " 4 semanas", 
        clasificacion: 4, contenido: ["Seleccionado, fuente de fibra, no contiene grasas, libre de gluten."]},
    "1021" : { codigo: "1021", nombre: "Piña", descripcion: "Piña por unidad", categoria: "102", imagen: "img/Pinia.jpeg", precio: 3470, duración: " 4 semanas", 
        clasificacion: 4, contenido: ["Variedad Oro Miel, dulce y jugosa, rica en vitamina C, maduración natural"]},
    "1031" : { codigo: "1031", nombre: "Whisky Johnnie Walker", descripcion: "Whisky por unidad", categoria: "103", imagen: "img/Whisky Johnnie Walker.jpeg", precio: 104400, duración: " 4 semanas", 
        clasificacion: 4, contenido: ["Sello Rojo, sabor suave y equilibrado, ideal para celebraciones, botella de 750 ml"]},
    "1051" : { codigo: "1051", nombre: "Pan de leche", descripcion: "Paquete de 4 unidades", categoria: "105", imagen:"img/Pan de leche.jpeg", precio: 2500, duración: " 4 semanas", 
        clasificacion: 4, contenido: ["Fresco, suave, esponjoso y con un toque dulce"]},
    "1061" : { codigo: "1061", nombre: "Huevos", descripcion: "Panal de 30 huevos tipo AAA", categoria: "106", imagen: "img/Huevos AAA en panal.jpeg", precio: 18000, duración: " 4 semanas", 
        clasificacion: 4, contenido: ["Huevos frescos, de gallinas alimentadas con maíz, ricos en proteínas y vitaminas"]},
    "1071" : { codigo: "1071", nombre: "Carne fina", descripcion: "Carne empacada por peso", categoria: "107", imagen: "img/Carne fina-libra.jpeg", precio: 18000, duración: " 4 semanas", 
        clasificacion: 4, contenido: ["Carne de alta calidad, seleccionada y procesada para garantizar frescura y sabor"]}            
};
localStorage.setItem("Productos", JSON.stringify(Productos));

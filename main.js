// Declaración de variables y objetos
let catalogo = [
    { marca: "Samsung", modelo: "Galaxy S21", precio: 1000 },
    { marca: "Apple", modelo: "iPhone 12", precio: 2000 },
    { marca: "Motorola", modelo: "Moto E22", precio: 700 },
    // Agrega más objetos de celulares al catálogo
];

// Función para mostrar el catálogo
function mostrarCatalogo() {
    console.log("Catálogo de celulares:");
    for (let i = 0; i < catalogo.length; i++) {
        const celular = catalogo[i];
        console.log(`${i + 1}) Marca: ${celular.marca}, Modelo: ${celular.modelo}, Precio: $${celular.precio}`);
    }
}

// Función para mostrar los precios
function mostrarPrecios() {
    console.log("Precios de celulares:");
    for (let i = 0; i < catalogo.length; i++) {
        const celular = catalogo[i];
        console.log(`${i + 1}) Marca: ${celular.marca}, Modelo: ${celular.modelo}, Precio: $${celular.precio}`);
    }
}

// Función para buscar celulares por marca
function buscarPorMarca(marca) {
    const celularesEncontrados = [];
    for (let i = 0; i < catalogo.length; i++) {
        const celular = catalogo[i];
        if (celular.marca.toLowerCase() === marca.toLowerCase()) {
            celularesEncontrados.push(celular);
        }
    }
    return celularesEncontrados;
}

// Función para filtrar celulares por precio máximo
function filtrarPorPrecioMaximo(precioMaximo) {
    const celularesFiltrados = [];
    for (let i = 0; i < catalogo.length; i++) {
        const celular = catalogo[i];
        if (celular.precio <= precioMaximo) {
            celularesFiltrados.push(celular);
        }
    }
    return celularesFiltrados;
}

alert("Bienvenido a la tienda de celulares");

while (true) {
    const opcion = prompt("Elige una opción:\n1) Ver catálogo de celulares\n2) Ver precios\n3) Buscar por marca\n4) Filtrar por precio máximo\n5) Salir");

    if (opcion === "1") {
        mostrarCatalogo();
    } else if (opcion === "2") {
        mostrarPrecios();
    } else if (opcion === "3") {
        const marcaBuscada = prompt("Ingresa la marca que deseas buscar:");
        const celularesEncontrados = buscarPorMarca(marcaBuscada);
        console.log("Celulares encontrados:");
        celularesEncontrados.forEach(celular => {
            console.log(`Marca: ${celular.marca}, Modelo: ${celular.modelo}, Precio: $${celular.precio}`);
        });
    } else if (opcion === "4") {
        const precioMaximo = parseFloat(prompt("Ingresa el precio máximo:"));
        const celularesFiltrados = filtrarPorPrecioMaximo(precioMaximo);
        console.log("Celulares filtrados por precio:");
        celularesFiltrados.forEach(celular => {
            console.log(`Marca: ${celular.marca}, Modelo: ${celular.modelo}, Precio: $${celular.precio}`);
        });
    } else if (opcion === "5") {
        alert("¡Gracias por visitar la tienda de celulares!");
        break;
    } else {
        alert("Opción no válida. Por favor, elige una opción válida.");
    }
}

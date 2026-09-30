 
<!-- Script interactivo de filtrado -->

    function filterMenu(category) {
        // Manejar estado activo de los botones
        const buttons = document.querySelectorAll('.btn-filter');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // Filtrar los elementos del menú
        const items = document.querySelectorAll('.menu-card');
        
        items.forEach(item => {
            if (category === 'todos' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }




 <!-- SCRIPT (JavaScript) -->
  
        function comprarProducto() {
            // Obtenemos los datos directamente del HTML usando el DOM
            const nombre = document.getElementById('nombreProducto').innerText;
            const precio = document.getElementById('precioProducto').innerText;
            
            // Acción interactiva
            alert(`¡Has añadido ${nombre} a tu carrito por un precio de ${precio}!`);
        }
  




<!-- SCRIPT (JavaScript) -->

        function comprarProducto() {
            // Obtenemos los datos directamente del HTML usando el DOM
            const nombre = document.getElementById('nombreProducto').innerText;
            const precio = document.getElementById('precioProducto').innerText;
            
            // Acción interactiva
            alert(`¡Has añadido ${nombre} a tu carrito por un precio de ${precio}!`);
        }






 <!-- SCRIPT (JavaScript) -->
  
        function comprarProducto() {
            // Obtenemos los datos directamente del HTML usando el DOM
            const nombre = document.getElementById('nombreProducto').innerText;
            const precio = document.getElementById('precioProducto').innerText;
            
            // Acción interactiva
            alert(`¡Has añadido ${nombre} a tu carrito por un precio de ${precio}!`);
        }
  


        
  
     <!-- SCRIPT (JavaScript) -->

        function comprarProducto() {
            // Obtenemos los datos directamente del HTML usando el DOM
            const nombre = document.getElementById('nombreProducto').innerText;
            const precio = document.getElementById('precioProducto').innerText;
            
            // Acción interactiva
            alert(`¡Has añadido ${nombre} a tu carrito por un precio de ${precio}!`);
        }
 




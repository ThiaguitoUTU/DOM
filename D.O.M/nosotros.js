const crearNosotros = () => {
    const nosotrosSection = document.createElement('section');
    nosotrosSection.innerHTML = `
        <h2>Nosotros</h2>
        <p>Somos un concesionario de venta de motos apasionado por ofrecer las mejores opciones a nuestros clientes. Contamos con un equipo dedicado y experto que está listo para ayudarte a encontrar la moto de tus sueños.</p>`;
    nosotrosSection.classList.add('nosotros');
    document.body.appendChild(nosotrosSection);
}

crearNosotros();

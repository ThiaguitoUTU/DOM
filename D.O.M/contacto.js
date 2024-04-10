
const crearContacto = () => {
    const contactoSection = document.createElement('section');
    contactoSection.innerHTML = `
        <h2>Contacto</h2>
        <p>Puedes contactarnos en example@example.com.</p>`;
    contactoSection.classList.add('contacto');
    document.body.appendChild(contactoSection);

}


crearContacto();


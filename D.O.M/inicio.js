const crearInicio = () => {
    const inicioSection = document.createElement('section');
    inicioSection.innerHTML = `
        <h2 style="text-align: center;">Venta de motos</h2>
        <p style="text-align: center;">Encuentra la moto que buscas</p>
        <section id="motos" style="display: flex; justify-content: center; flex-wrap: wrap;"></section>
    `;
    document.body.appendChild(inicioSection);
}

const crearMoto = (modelo, precio, imagen) => {
    const motosDiv = document.getElementById('motos');
    const motoDiv = document.createElement('div');
    motoDiv.classList.add('moto');
    motoDiv.style.margin = '20px';
    motoDiv.style.padding = '10px';
    motoDiv.style.border = '1px solid #ccc';
    motoDiv.style.borderRadius = '5px';
    motoDiv.innerHTML = `
        <h3 style="text-align: center;">${modelo}</h3>
        <p style="text-align: center;">Precio: $${precio}</p>
        <img src="${imagen}" alt="${modelo}" style="display: block; margin: 0 auto; max-width: 300px; height: auto;">
    `;
    motosDiv.appendChild(motoDiv);
}

crearInicio();

crearMoto("Yamaha YZF-R6", 12000, "https://static.wixstatic.com/media/3104c9_29351cc6abee4db59bd3a76ca1d2116b~mv2.jpg/v1/fill/w_480,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3104c9_29351cc6abee4db59bd3a76ca1d2116b~mv2.jpg");
crearMoto("Honda CBR600RR", 11500, "https://soymotero.net/wp-content/uploads/2023/11/458099_24YMHONDACBR600RR.jpg");
crearMoto("Kawasaki Ninja ZX-6R", 12500, "https://publimotos.com/wp-content/uploads/2023/11/AGRESIVA-Asi-se-denomina-la-nueva-Kawasaki-Ninja-ZX-6R-2024-con-que-viene.jpg");
crearMoto("Suzuki GSX-R600", 11000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_grhZCIN3cOSTClUZSCtIwCABusuPSdhj7jv6acviw&s");

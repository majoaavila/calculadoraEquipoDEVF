const pantalla = document.getElementById('pantalla');
const botones = Array.from(document.getElementsByClassName('btn'));

botones.map(button => {
    button.addEventListener('click', (elemento) => {
        switch (elemento.target.innerText) {
            case 'AC':
                pantalla.innerText = '';
                break;
            case '=':
                try {
                    pantalla.innerText = eval(pantalla.innerText);
                } catch {
                    pantalla.innerText = "Error"
                }
                break;
            case 'DEL':
                if (pantalla.innerText) {
                    pantalla.innerText = pantalla.innerText.slice(0, -1);
                }
                break;
            default:
                pantalla.innerText += elemento.target.innerText;
        }
    });
});


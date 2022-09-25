const lamp = document.getElementById('lamp')
const turnOnOff = document.getElementById('turnOnOff')

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);

    function isLampBroken (){
        return lamp.src.indexOf ('quebrada') > -1
    }

    function lampBroken(){
        lamp.src = './img/quebrada.jpg'
        turnOnOff.textContent = 'Quebrou!'
    }

    function lampOn(){
        if (!isLampBroken()){
            lamp.src = './img/ligada.jpg';
            turnOnOff.textContent = 'Desligar';
        }
    }

    function lampOff(){
        if(!isLampBroken()){
            lamp.src = './img/desligada.jpg';
            turnOnOff.textContent = 'Ligar';
        }
    }
    function lampOnOff (){
        if(turnOnOff.textContent == 'Ligar' && turnOnOff.textContent != 'Quebrou!'){
            lampOn();
        }
        else if(turnOnOff.textContent == 'Desligar' && turnOnOff.textContent != 'Quebrou!'){
            lampOff();
        }
        else if(turnOnOff.textContent == 'Quebrou!'){
            alert('Por favor, reinicie a página para consertar sua Lâmpada Mágica!')
        }

    }


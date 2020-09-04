var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody');

var somaVolumes = 0;

document.querySelector('.form').addEventListener('submit', function(event){
    
    //Removendo o padrão de atualizar a página ao submeter um form.
    event.preventDefault();

    var tr = document.createElement("tr");

    campos.forEach(function(campo){
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement("td");
    
    tdVolume.textContent = campos[1].value * campos[2].value;

    tdVolume.classList.add('volume');
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);


    var trSomaVolume = document.createElement("tr");
    var tdSomaVolume = document.createElement("td");

    var volumes = document.querySelectorAll('.volume');

    volumes.forEach(function(volume){
        
        inteiro = parseInt(volume.textContent);
        console.log(volume.textContent);
        (somaVolumes += inteiro);
        
        tdSomaVolume.textContent = somaVolumes;
        
    });

    trSomaVolume.appendChild(tdSomaVolume);
    tbody.appendChild(tdSomaVolume);
    

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});


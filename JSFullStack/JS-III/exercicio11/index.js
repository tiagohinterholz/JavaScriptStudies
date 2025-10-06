function addPlayer() {
    const position = document.getElementById('position').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    console.log({position, name, number});
    const confirmation = confirm(`Deseja adicionar o jogador ${name} na posição ${position} com o número ${number}?`);
    if (confirmation) {
        const teamList = document.getElementById('teamList');
        const playerItem = document.createElement('li');
        playerItem.id = 'Jogador - ' + number
        playerItem.innerText = `Posição: ${position} - Nome: ${name} (${number})`;
        teamList.appendChild(playerItem);
        
        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value;
    const playerToRemove = document.getElementById('Jogador - ' + number);
    const confirmation = confirm(`Deseja remover o jogador ${playerToRemove.innerText}?`);

    if (confirmation) {
        document.getElementById('teamList').removeChild(playerToRemove);
        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    }
}
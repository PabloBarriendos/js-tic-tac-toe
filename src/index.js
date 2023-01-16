window.onload = () => {
    console.log('loaded')
    let cells = document.getElementsByClassName('cell');

    let currentTurn = document.getElementsByClassName('turn-cell-o')[0];

    for (const cell of cells) {
        cell.onclick = (event) => {
            console.log(cells);
            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)
            cell.className = currentTurn.className;
            if(currentTurn.className === 'turn-cell-x'){
                currentTurn.className = 'turn-cell-o'
            }else{
                currentTurn.className = 'turn-cell-x'
            }
            cells = document.getElementsByClassName('cell');
        }
    }
}

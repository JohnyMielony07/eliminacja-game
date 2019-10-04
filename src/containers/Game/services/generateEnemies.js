import mixElementsPositions from './mixElementsPosition';

const rotatePlayers = playersList => {
    const playersNumber = playersList.length - 1;
    const rotateNumber = Math.floor(Math.random() * (playersNumber) + 1);
    const rotatedList = [];

    for(let i = 0; i <= playersNumber; i++) {
        if(i + rotateNumber <= playersNumber) {
            rotatedList[i] = playersList[i + rotateNumber];
        } else {
            rotatedList[i] = playersList[i + rotateNumber - playersNumber - 1];
        }
    }
    return rotatedList;
}

const generateEnemies = (playersList) => {
    const mixedPlayerList = mixElementsPositions(playersList, playersList.length * 3);

    return rotatePlayers(mixedPlayerList);
}

export default generateEnemies;
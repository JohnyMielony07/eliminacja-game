const generatePosition = (maxNumber, forbidden) => {
    const forbiddenNumber = forbidden != null ? forbidden : false;
    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * (maxNumber + 1));
    } while (newNumber === forbiddenNumber)
    return newNumber;
}

const mixElementsPositions = (playersList, mixNumber) => {
    const newPlayerList = playersList;

    for (let i = 0; i < mixNumber; i++) {
        const maxNumber = playersList.length - 1;

        const firstPosition = generatePosition(maxNumber);
        const secondPosition = generatePosition(maxNumber, firstPosition);
        const res = newPlayerList[firstPosition];
        newPlayerList[firstPosition] = newPlayerList[secondPosition];
        newPlayerList[secondPosition] = res;
    }
    return newPlayerList;
}

export default mixElementsPositions;
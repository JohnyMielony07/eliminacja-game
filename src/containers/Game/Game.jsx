import React from 'react';
import PlayersPanel from './PlayersPanel';
import SubjectsPanel from './SubjectsPanel';
import SpotesPanel from './SpotesPanel';
import myContext from '../../myContext';

const Game = () => {

    const [playersList, setPlayersList] = React.useState(['ddddddd', 'aaaaa']);
    const [subjectsList, setSubjectsList] = React.useState(['sss']);
    const [spotesList, setSpotesList] = React.useState([]);

    const addPlayer = newPlayer => {
        setPlayersList([...playersList, newPlayer])
    }

    const deletePlayer = playerToDelete => {
        const newList = playersList.filter(player => player !== playerToDelete);
        setPlayersList(newList);
    }

    const addSubject = newSubject => {
        setSubjectsList([...subjectsList, newSubject])
    }

    const deleteSubject = subjectToDelete => {
        const newList = subjectsList.filter(subject => subject !== subjectToDelete);
        setSubjectsList(newList);
    }

    const addSpote = newSpote => {
        setSpotesList([...spotesList, newSpote])
    }

    const deleteSpote = spoteToDelete => {
        const newList = spotesList.filter(spote => spote !== spoteToDelete);
        setSpotesList(newList);
    }

    const playersContext = { playersList, addPlayer, deletePlayer }
    const subjectsContext = { subjectsList, addSubject, deleteSubject }
    const spotesContext = { spotesList, addSpote, deleteSpote }

    return (
        <main style={{ width: '70%', margin: 'auto' }}>
            <div className='columns'>
                <div className='column'>
                    <myContext.Provider value={playersContext}>
                        <PlayersPanel />
                    </myContext.Provider>
                </div>
                <div className='column'>
                    <myContext.Provider value={subjectsContext}>
                        <SubjectsPanel />
                    </myContext.Provider>
                </div>
                <div className='column'>
                    <myContext.Provider value={spotesContext}>
                        <SpotesPanel />
                    </myContext.Provider>
                </div>
            </div>
        </main>
    )
}

export default Game;
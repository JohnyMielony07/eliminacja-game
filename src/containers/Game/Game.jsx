import React from 'react';
import PlayersPanel from './PlayersPanel';
import SubjectsPanel from './SubjectsPanel';
import SpotesPanel from './SpotesPanel';
import myContext from '../../myContext';

const Game = () => {

    const [playersList, setPlayersList] = React.useState(['ddddddd', 'aaaaa']);
    const [subjectsList, setSubjectsList] = React.useState([]);
    const [spotesList, setSpotesList] = React.useState([]);

    const addPlayer = newPlayer => {
        setPlayersList([...playersList, newPlayer])
    }
    const addSubject = newSubject => {
        setSubjectsList([...subjectsList, newSubject])
    }
    const addSpote = newSpote => {
        setSpotesList([...spotesList, newSpote])
    }

    const playersContext = { playersList, addPlayer }
    const subjectsContext = { subjectsList, addSubject }
    const spotesContext = { spotesList, addSpote }

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
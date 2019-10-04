import React from 'react';
import PlayersPanel from './PlayersPanel';
import SubjectsPanel from './SubjectsPanel';
import SpotesPanel from './SpotesPanel';
import myContext from '../../myContext';

const Game = () => {

    const [playersList, setPlayersList] = React.useState(['ddddddd', 'aaaaa']);
    const [subjectsList, setSubjectsList] = React.useState([]);
    const [spotesList, setSpotesList] = React.useState([]);

    const vv = { playersList: playersList, setPlayersList: setPlayersList }

    return (
        <main style={{ width: '70%', margin: 'auto' }}>
            a game

            <div className='columns'>
                <div className='column'>
                    <myContext.Provider value={vv}>
                        <PlayersPanel />
                    </myContext.Provider>
                </div>
                <div className='column'>
                    <SubjectsPanel />
                </div>
                <div className='column'>
                    <SpotesPanel />
                </div>
            </div>
        </main>
    )
}

export default Game;
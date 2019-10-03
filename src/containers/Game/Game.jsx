import React from 'react';
import PlayersPanel from './PlayersPanel';
import SubjectsPanel from './SubjectsPanel';
import SpotesPanel from './SpotesPanel';

const Game = () => {
    return (
        <main style={{width: '70%', margin: 'auto'}}>
            a game
            <div className='columns'>
            <div className='column'>
            <PlayersPanel />
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
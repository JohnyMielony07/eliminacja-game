import React from 'react';
import Button from '../pieces/Button/Button';
import generateEnemies from './services/generateEnemies';
import myContext from '../../myContext';

const PlayersPanel = () => {

    const [newPlayerName, setNewPlayerName] = React.useState('');
    
    return (
        <myContext.Consumer>
            {({ playersList, addPlayer }) => (
                <div className='box'>
                    <p className="title is-5">panel graczy</p>
                    <div className="input-panel">
                        <input className="input" placeholder="new player's name" value={newPlayerName} onChange={e => setNewPlayerName(e.target.value)} />
                        <Button className="is-primary input-panel__button" value="+" onClick={() => addPlayer(newPlayerName)} />
                    </div>
                    <div className="title is-6" style={{ margin: '30px 0' }}>lista graczy:</div>
                    {playersList.map(player => (
                        <div className="subtitle is-6">{player}</div>
                    ))}
                </div>
            )
            }
        </myContext.Consumer>
    )
}

export default PlayersPanel;
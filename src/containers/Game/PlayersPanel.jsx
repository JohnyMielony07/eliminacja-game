import React from 'react';
import Button from '../pieces/Button/Button';
import generateEnemies from './services/generateEnemies';
import myContext from '../../myContext';

const PlayersPanel = () => {

    const [newPlayerName, setNewPlayerName] = React.useState('');

    return (
        <myContext.Consumer>
            {({ playersList, addPlayer, deletePlayer }) => (
                <div className='box'>
                    <div className="item-container">
                        <p className="title is-5">
                            panel graczy
                        </p>
                        <p>
                            {playersList.length}
                        </p>
                    </div>
                    <div className="input-panel">
                        <input className="input" placeholder="new player's name" value={newPlayerName} onChange={e => setNewPlayerName(e.target.value)} />
                        <Button className="is-primary input-panel__button" value="+" onClick={() => addPlayer(newPlayerName)} />
                    </div>
                    <div className="title is-6" style={{ margin: '30px 0' }}>lista graczy:</div>
                    {playersList.map(player => (
                        <div className="subtitle is-6 item-container">
                            {player}
                            <a className="delete is-small" onClick={() => deletePlayer(player)} />
                        </div>
                    ))}
                </div>
            )
            }
        </myContext.Consumer>
    )
}

export default PlayersPanel;
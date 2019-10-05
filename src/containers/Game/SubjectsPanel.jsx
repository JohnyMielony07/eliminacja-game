import React from 'react';
import Button from '../pieces/Button/Button';
import myContext from '../../myContext';

const SubjectsPanel = () => {
    
    const [newSubjectName, setNewSubjectName] = React.useState('');

    return (
        <myContext.Consumer>
            {({ subjectsList, addSubject }) => (
                <div className='box'>
                    <p className="title is-5">panel przedmiotów</p>
                    <div className="input-panel">
                        <input className="input" placeholder="new subject's name" value={newSubjectName} onChange={e => setNewSubjectName(e.target.value)} />
                        <Button className="is-primary input-panel__button" value="+" onClick={() => addSubject(newSubjectName)} />
                    </div>
                    <div className="title is-6" style={{ margin: '30px 0' }}>lista graczy:</div>
                    {subjectsList.map(subject => (
                        <div className="subtitle is-6">{subject}</div>
                    ))}
                </div>
            )}
        </myContext.Consumer>
    )
}

export default SubjectsPanel;
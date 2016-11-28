import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Gather Mushrooms'
        },
        {
          id: uuid.v4(),
          task: 'Pet Hedgehog'
        }
      ]
    };
  }

  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+ Add Note</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    )
  }


  addNote = () => {

      this.setState({
        notes: this.state.notes.concat([{
          id: uuid.v4(),
          task: 'New task '
        }])
      });

  }

  deleteNote = (id, e) => {
    // avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      // set all notes to ones that are not equal to the specified ID. Guess that's one way to do it.
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
}

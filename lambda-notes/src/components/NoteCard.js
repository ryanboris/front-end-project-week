import React, { Component } from 'react';
import StyledNoteCard from '../styles/StyledNoteCard';


class NoteCard extends Component {
  render() {
    const { note } = this.props;
    return (
      <StyledNoteCard
        onClick={() => this.props.handleRedirectToNoteView(note._id)}
      >
        <h3>{note.title}</h3>
        <hr />
        <span>{note.textBody}</span>
      </StyledNoteCard>
    );
  }
}

export default NoteCard;

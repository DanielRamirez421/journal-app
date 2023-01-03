import { useDispatch } from "react-redux";

import { startNewNote } from "../store/journalThunks";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddEntryButton } from "../components";

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  };

  return (
    <JournalLayout>
      {/* <Typography>Sint eu laborum laborum tempor excepteur exercitation in voluptate voluptate duis. Amet culpa consequat fugiat quis velit. Quis velit commodo sunt exercitation et Lorem esse cupidatat incididunt cupidatat fugiat esse. Laboris magna laboris amet dolor aute eiusmod ipsum.</Typography> */}
      
      {/* <NoteView /> */}
      <NothingSelectedView />
      <AddEntryButton onClickNewNote={onClickNewNote}/>
      
    </JournalLayout>
  );
};

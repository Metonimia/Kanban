import { connect } from "react-redux";
import Lane from "./Lane";
import * as laneActions from './LaneActions';
import { createNote, createNoteRequest, editNoteRequest, deleteNoteRequest } from "../Note/NoteActions";
import { createLaneRequest, editLaneRequest, deleteLaneRequest, fetchLanes, deleteLane, updateLane, editLane } from './LaneActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
  editLane: editLaneRequest,
  deleteLane: deleteLaneRequest,
  editNote: editNoteRequest,
  deleteNote: deleteNoteRequest
};


export default connect(mapStateToProps, mapDispatchToProps)(Lane);

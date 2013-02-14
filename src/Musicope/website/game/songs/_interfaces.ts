/// <reference path="../_references.ts" />
// time units = miliseconds
module IGame {

  export interface INoteScene {
    timeOn: number;
    timeOff: number;
    id: number;
    velocityOn: number;
    velocityOff: number;
  }

  export interface ISong {
    notesOutOfReach: bool;
    timePerBeat: number;
    timePerBar: number;
    timePerSong: number;
    noteValuePerBeat: number; // denominator in time signature: 2, 4, 8, 16 ...
    playerTracks: INote[][];
    sceneTracks: INoteScene[][];
    minNoteId: number;
    maxNoteId: number;
  }

  export interface ISongNew {
    new (midi: Uint8Array, params: IParams): ISong;
  }
}
import React from 'react'
import { notesType } from '../types'

interface notePropType {
  note: notesType
}
const NoteItem = ({note}) => {
  return (
    <div>
    <h3>This is {note}</h3>
    <p>this is boduybjadsbjkfasdvbds sdbfjkdsv bvsdjjds jdks </p>
    <small>Feb 08, 2025</small>
  </div>
  )
}

export default NoteItem
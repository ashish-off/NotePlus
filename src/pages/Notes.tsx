import React from 'react'
import { IoMdSearch } from "react-icons/io";
import dummyNotes from "../data/dummyNotes"
import NoteItem from '../components/NoteItem';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { notesType } from '../types';



const Notes = () => {
  return (
    <section>
      <header className='notes__header'>
        <h2 >My Notes</h2>
        <input type="text" autoFocus placeholder='search notes...' />
        <button className='btn'><IoMdSearch /></button>
      </header>

      <div className="notes__container">
        {
          // dummyNotes.map((note => <NoteItem key={note.id} note={note} />))
          <NoteItem  note={"test"} />
        }
      </div>
      <Link to={"/create-note"} className='btn add__btn'> <BsPlusLg/> </Link>

    </section>
  )
}

export default Notes
import NoteCard from "../components/NoteCard.jsx";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext.jsx";
import Controls from "../components/Controls"

const NotesPage = () => {

    const {notes} = useContext(NoteContext)

    return ( 
        <div>
            {notes.map(notes_list =>(
                <NoteCard key={notes_list.$id} note={notes_list}/>
            ))}

            <Controls />

            
        </div>
    )
}

export default NotesPage
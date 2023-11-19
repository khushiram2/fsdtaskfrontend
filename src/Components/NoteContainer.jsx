import { FormControl, InputGroup } from "react-bootstrap"
import { SingleNote } from "../Pages/SingleNote"
import "../Styles/noteContainer.css"
import InputGroupText from "react-bootstrap/esm/InputGroupText"
import { IoSearchCircle } from "react-icons/io5"
import { useNoteContext } from "../Context/CustomuseContexthook"




export const NoteContainer = () => {
const {allNotes}=useNoteContext()



return(
    <div className="home-main-container" >
        <div className="search-bar" >
        <InputGroup className="mb-3">
        <InputGroupText><IoSearchCircle /> </InputGroupText>
        <FormControl
          placeholder="Search"
          aria-label="search"
        />
      </InputGroup>
      <div className="App-name">
        <h2>Notes</h2>
      </div>
        </div>
    <div className="all-note-container" >
      {allNotes.map((e, i) => (
          <SingleNote key={i} data={e} />
          ))}
    </div>  
    </div>
)
}
import Note from "./Note";

const Notes = (props: any) => {
  return (
    <div className="flex flex-wrap justify-items-center  ">
      {Array.isArray(props.notes)
        ? props.notes.map((note: any) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
				notes={props.notes}
				setNotes={props.setNotes}
              />
            );
          })
        : null}
    </div>
  );
};

export default Notes;

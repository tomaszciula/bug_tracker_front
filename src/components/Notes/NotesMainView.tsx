import { useEffect, useState } from "react";
import Notes from "./Notes";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import useUser from "@/hooks/useUser";
import Loading from "../Loading";

const NotesMainView = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState([
    {
      id: "",
      title: "",
      content: "",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const user = useUser();

  const getNotes = () => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/notes")
      .then((res) => {
		console.log("Notes - res.data: ", res.data);
		
		setNotes(res.data)
		setLoading(false)
	})
      .catch((err) => console.log(err));
  };

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (e: any) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setNewNote(Object.assign(newNote, { user: user }));
    handleOpen();
    console.log("Nowa notatka przed AXIOS: ", newNote);

    axios.post(process.env.NEXT_PUBLIC_API_URL + "/add/note", newNote);
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/notes").then((res) => {
      setNotes(res.data);
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
	console.log("NotesMainView - notes: ", notes);
	
  }, [notes])

  return (
    <>
      <div className="p-5">
        <Button onClick={handleOpen}>Add new note</Button>
        {loading ? (
          <Loading />
        ) : notes.length === 0 ? (
          <Typography variant="h5" className="mt-5 ml-2">
            No notes yet
          </Typography>
        ) : (
          <Notes notes={notes} setNotes={setNotes}/>
        )}
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              New note
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              name="title"
              label="Title"
              size="lg"
              onChange={handleInputChange}
            />
            <Textarea
              name="content"
              label="Content"
              size="lg"
              onChange={handleInputChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              name="Create new note"
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              Create new note
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default NotesMainView;

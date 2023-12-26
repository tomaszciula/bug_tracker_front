import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Option,
  Textarea,
  Select,
  List,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Todos from "./Todos";
import axios from "axios";
import useUser from "@/hooks/useUser";
import { text } from "stream/consumers";

const TodosMainView = () => {
  const [activeTab, setActiveTab] = useState("must");
  const [todos, setTodos] = useState([{}]);
  const [filteredTodos, setFilteredTodos] = useState([{}]);
  const [newTodo, setNewTodo] = useState({
    done: false,
    text: "",
  });
  const [important, setImportant] = useState("must");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const user = useUser();
  //@ts-ignore
  const user_id: number = user.id;

  const data = [
    {
      label: "Must do",
      value: "must",
      desc: `Things that I really have to do`,
    },
    {
      label: "Should do",
      value: "should",
      desc: `Things I should do but they are not too important`,
    },
    {
      label: "Maybe to do",
      value: "maybe",
      desc: `Things that I would like to do in the future`,
    },
  ];

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  const handleInputChange = (e: any) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleImportant = (e: any) => {
    setImportant(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setNewTodo(
      //@ts-ignore
      Object.assign(newTodo, { user_id: user.id, important: important })
    );
    // setNewTodo({...newTodo, user_id: user_id});
    // setNewTodo({...newTodo, important: important});
    handleOpen();
    axios.post(process.env.NEXT_PUBLIC_API_URL + "/add/todo", newTodo);
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/todos").then((res) => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/todos")
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //@ts-ignore
    const filtered = todos.filter((todo) => todo.important === activeTab);
    setFilteredTodos(filtered);
  }, [activeTab, todos]);

  useEffect(() => {
    console.log("TODOS: ", todos);
  }, [filteredTodos, todos, newTodo, important]);

  useEffect(() => {
    console.log("TODOS: ", todos);
  }, [todos]);

  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <div className="p-5">
        <Button onClick={handleOpen} className="mb-5">
          Add new todo
        </Button>
        {loading ? (
          <Loading />
        ) : todos.length === 0 ? (
          <Typography variant="h5" className="mt-5 ml-2">
            No todos yet
          </Typography>
        ) : (
          <Card className="w-full">
            <List>
              <Todos
                tab={activeTab}
                todos={filteredTodos}
                list={todos}
                setTodos={setTodos}
              />
            </List>
          </Card>
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
              New Todo
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Select
              name="important"
              value={important}
              label="Priority"
              size="lg"
              onChange={handleImportant}
            >
              <Option key="must" id="must" value="must">
                Must do
              </Option>
              <Option key="should" id="should" value="should">
                Should do
              </Option>
              <Option key="maybe" id="maybe" value="maybe">
                Maybe
              </Option>
            </Select>
            <Textarea
              name="text"
              label="To do"
              size="lg"
              onChange={handleInputChange}
            />
            {/* <Textarea
              name="content"
              label="Content"
              size="lg"
              onChange={handleInputChange}
            /> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              name="Create new todo"
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              Create new todo
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default TodosMainView;

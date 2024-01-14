import { data } from "autoprefixer";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Cell,
} from "recharts";

const StatsMainView = () => {
  const [bugs, setBugs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);
  const [time, setTime] = useState([]);
  const [loading, setLoading] = useState(true);

  let todo: number = 0,
    inprogress: number = 0,
    testing: number = 0,
    done: number = 0;

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/bugs")
      .then((res) => {
        setBugs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {});
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // x-projekty y-ilość błędów w projekcie
  const chart1 = () => {
    const data = new Array();
    projects.forEach((project) => {
      data.push({
        //@ts-ignore
        name: project.name,
        //@ts-ignore
        uv: Object.keys(project.bug).length,
        pv: 500,
        amt: 500,
      });
    });
    console.log(data);
    return data;
  };

  // x-projekty y-ilość uczestników w projekcie
  const chart2 = () => {
    const data = new Array();
    projects.forEach((project) => {
      data.push({
        //@ts-ignore
        name: project.name,
        //@ts-ignore
        uv: Object.keys(project.user).length,
        pv: 500,
        amt: 500,
      });
    });
    return data;
  };
  // ilość błędów ze względu na status
  const chart3 = () => {
    let data = new Array();
    bugs.forEach((bug) => {
      //@ts-ignore
      if (bug.status === "To do") {
        todo++;
      }
      //@ts-ignore
      if (bug.status === "In progress") {
        inprogress++;
      }
      //@ts-ignore
      if (bug.status === "Testing") {
        testing++;
      }
      //@ts-ignore
      if (bug.status === "Done") {
        done++;
      }
    });
    data = [
      {
        name: "To do",
        value: todo,
      },
      {
        name: "In progress",
        value: inprogress,
      },
      {
        name: "Testing",
        value: testing,
      },
      {
        name: "Done",
        value: done,
      },
    ];
    console.log("Chart3: ", data);
    return data;
  };

  return (
    // {loading ? (
    // 	<Loading />
    //   ) : notes.length === 0 ? (
    // 	<Typography variant="h5" className="mt-5 ml-2">
    // 	  No notes yet
    // 	</Typography>
    //   ) : (
    // 	<Notes notes={notes} setNotes={setNotes}/>
    //   )}
    // <ResponsiveContainer width="100%" height="100%">

    <div className="flex flex-wrap w-full h-full">
      <BarChart
        width={600}
        height={300}
        data={chart1()}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Ilość błędów w projekcie" dataKey="uv" fill="#4a8" />
      </BarChart>
      <BarChart
        width={600}
        height={300}
        data={chart2()}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Ilość uczestników w projekcie" dataKey="uv" fill="#8884d8" />
      </BarChart>
      <PieChart width={600} height={200}>
        <Tooltip />
        <Pie
          data={chart3()}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chart3().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend name="Ilość błędów ze względu na status" />
      </PieChart>
      {/* <PieChart width={600} height={300}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={chart3()}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart> */}
    </div>
    // {/* </ResponsiveContainer> */}
  );
};

export default StatsMainView;

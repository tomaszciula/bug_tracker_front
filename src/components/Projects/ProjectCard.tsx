import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
  Tooltip,
} from "@material-tailwind/react";
import useFetch from "@/hooks/useFetch";
import { log } from "console";
import { Children } from "react";

const ProjectCard = (props: any) => {
  console.log("Project: ", props.project);
  // const image = useFetch("https://source.unsplash.com/random/500×700/?programming?javascript?bugs");
  // console.log("Image data: ", image);
  return (
    <Card className="max-w-[24rem] overflow-hidden mt-5 mr-5 cursor-pointer">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        {/* <img
          src="https://source.unsplash.com/random/500×700/?programming?javascript?bugs"
          alt="ui/ux review check"
        /> */}
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {props.project.name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {props.project.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center ">
          {props.project.user.length > 0 ?
          <>
          <Tooltip content={props.project.user[0].firstname}>
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10 mx-5" />
          </Tooltip>
          <Typography className="font-normal">I {`${props.project.user.length}`} jeszcze</Typography>
          </> : "xxx"}
          {/* <Tooltip content="Candice Wu">
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10" />
            </Tooltip> */}
        </div>
        {/* <Typography className="font-normal">January 10</Typography> */}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

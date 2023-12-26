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

const ProjectCard = (props: any) => {

  return (
    <Card className={`max-w-[24rem] overflow-hidden mt-5 mr-5 cursor-pointer first-of-type:bg-green-200 odd:bg-cyan-200 even:bg-lime-200 last-of-type:bg-red-200`}>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {props.project.name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {props.project.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex h-full">
        <div className="flex items-center ">
          {props.project && props.project.user.length > 0 ? (
            <>
              <Typography className="font-normal">
                {`${props.project.user.length}`} uczestników
              </Typography>
            </>
          ) : (
            "Nikt nie uczestniczy"
          )}
        </div>
        {/* <Typography className="font-normal">January 10</Typography> */}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Key } from "react";

const Users = (props: any) => {
  const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];
  console.log("props", props);
  return (
    // <div>
    //     {Array.isArray(props.users)
    //       ? props.users[0].map((user: any) => {
    //           console.log("map")
    //           return (
    //             <li
    //               key={user.id}
    //               className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
    //             >
    //               {user.email}
    //             </li>
    //           );
    //         })
    //       : null}
    //   </div>
    <div>
      {Array.isArray(props.users)
        ? props.users[0].map((user: any) => {
            return (
              <>
                <Card className="h-full w-full">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none"
                  >
                    <div className="mb-8 flex items-center justify-between gap-8">
                      <div>
                        <Typography variant="h5" color="blue-gray">
                          Members list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                          See information about all members
                        </Typography>
                      </div>
                      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" color="blue-gray" size="sm">
                          view all
                        </Button>
                        <Button
                          className="flex items-center gap-3"
                          color="blue"
                          size="sm"
                        >
                          <UserPlusIcon strokeWidth={2} className="h-4 w-4" />{" "}
                          Add member
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                      {/* <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs> */}
                      {/* <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div> */}
                    </div>
                  </CardHeader>
                  <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {props.users.map((head: any) => (
                            <th
                              key={head.id}
                              className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                              >
                                {head}
                              </Typography>
                            </th>
                          ))}
                        </tr>
                      </thead>

                    </table>
                  </CardBody>
                  <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                      <Button variant="outlined" color="blue-gray" size="sm">
                        Previous
                      </Button>
                      <Button variant="outlined" color="blue-gray" size="sm">
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </>
            );
          })
        : null}
    </div>
  );
};

export default Users;

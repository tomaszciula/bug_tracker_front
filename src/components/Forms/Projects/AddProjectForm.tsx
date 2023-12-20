"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, Input, Textarea } from "@material-tailwind/react";

const AddProjectForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleAddProjectSubmit = () => {
    console.log("Handle Add Project Submit");
    router.back();
  };
  return (
    <div className="w-full xl:w-5/12 px-4 align-center mt-5">
      <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
        <>
          {" "}
          <Button className="mb-5" onClick={() => router.back()}>Back</Button>
          <form onSubmit={handleSubmit(handleAddProjectSubmit)}>
            <div className="mb-6">
              <Input
                //   {...register("")}
                type="text"
                // placeholder="Project Name"
                label="New project name"
                className=""
                // className="
                //               w-full
                //               rounded
                //               m-5
                //               py-3
                //               px-[14px]
                //               text-body-color text-base
                //               border border-[f0f0f0]
                //               outline-none
                //               focus-visible:shadow-none
                //               focus:border-primary
                //               "
              />
            </div>
            {/* <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Phone"
              className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
            />
          </div> */}
            <div className="mb-6">
              <Textarea
                // placeholder="Description"
                label="Description"
                rows={6}
                className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              ></Textarea>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full"
                // className="
                //         w-full
                //         text-white
                //         bg-primary
                //         rounded
                //         border border-primary
                //         p-3
                //         transition
                //         hover:bg-opacity-90
                //         "
              >
                Create new project
              </Button>
            </div>
          </form>
        </>
      </div>
    </div>
  );
};

export default AddProjectForm;

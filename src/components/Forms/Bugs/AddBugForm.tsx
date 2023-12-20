"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const AddBugForm = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const handleAddBugSubmit = () => {
        console.log("Handle Add Bug Submit");
        router.back();
      };
  return (
        // <div className="w-full lg:w-1/2 xl:w-5/12 px-4 align-center">
    //   <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
    <form onSubmit={handleSubmit(handleAddBugSubmit)}
>
      <div className="mb-6">
        <input
        //   {...register("")}
          type="text"
          placeholder="Project Name"
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
        <textarea
          rows={6}
          placeholder="Description"
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
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
        >
          Create new project
        </button>
      </div>
    </form>
    //   </div>
    // </div>
  );
};

export default AddBugForm;

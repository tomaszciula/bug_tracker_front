"use client";
import { useEffect, useState } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { positions, roles } from "@/constants/arrays";
import { useRouter } from "next/navigation";
const Register = () => {
  const [position, setPosition] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  type Inputs = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    position: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // credentials: "same-origin",
    }).then(
      function (response) {
        response.status === 200 ? router.push(`${process.env.NEXT_PUBLIC_API_URL}/login`) : null;
      },
      function (error) {
        console.log(error.message);
      }
    );
  };

  useEffect(() => {
    register("position");
    register("role");
  }, [register]);

  return (
    <>
      {/* <Header /> */}
      <div className="container h-screen mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://plus.unsplash.com/premium_photo-1670745184444-2fa4b7b2b6c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')]"></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <Input label="First name" {...register("firstname")} />
                  </div>
                  <div className="md:ml-2">
                    <Input label="Last name" {...register("lastname")} />
                  </div>
                </div>
                <div className="mb-4">
                  <Input label="Email" {...register("email")} />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <Input label="Password" {...register("password")} />
                    {/* <p className="text-xs italic text-red-500">
                      Please choose a password.
                    </p> */}
                  </div>
                  <div className="md:ml-2">
                    <Input
                      label="Confirm password"
                      {...register("confirmPassword")}
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <Select
                      name="position"
                      label="Choose your position"
                      value={position}
                      onChange={(e) => setValue("position", e)}
                    >
                      {positions.map((position) => (
                        <Option key={position} value={position}>
                          {position}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div className="md:ml-2">
                    <Select
                      name="role"
                      label="Choose your role"
                      value={role}
                      onChange={(e) => setValue("role", e)}
                    >
                      {roles.map((role) => (
                        <Option value={role} key={role}>
                          {role.slice(5)}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

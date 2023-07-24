"use client";
import UserContext from "@/context/userInfo";
import React, { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  id: string;
  password: string;
  isLoggedIn: boolean;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const context = useContext(UserContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (context && !context.state.user.isLoggedIn) {
      console.log(context?.state.user.isLoggedIn);
      context.dispatch({
        type: "LOGIN",
        payload: {
          name: "SeungGuk",
          email: data.id,
          isLoggedIn: true,
        },
      });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>ID:</label>
        <input type="text" className=" text-black block" {...register("id", { required: "This is required ID" })} />

        <label>PASSWORD:</label>
        <input
          type="password"
          className=" text-black block"
          {...register("password", { required: "This is required PASSWORD" })}
        />

        <div className="flex justify-around">
          <input type="submit" value="LOGIN" />
          <button>CLOSE</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

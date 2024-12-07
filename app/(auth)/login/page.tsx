"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { useClerk } from '@clerk/nextjs'
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mpin, setMpin] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  

  if (!isLoaded) {
    return null;
  }
  
  const handleRouter = () => {
    router.push("/dashboard");
  };
  

  const submit = async (e: React.FormEvent) => {
    
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
    console.log("phoneNumber", phoneNumber);
    console.log("mpin", mpin);
    
    try {
      const email = "itadmin@onetkt.in"
      const password = "7978375204"
      const res = await signIn.create({
        identifier: email,
        password
      });
      console.log("res", res);
      if (res.status === "complete") {
        await setActive({ session: res.createdSessionId });
        // handleRouter()
      } else {
        console.error(JSON.stringify(res, null, 2));
      }
    } catch (err: any) {
      console.error("error", err);
      setError(err.errors[0].message);
    }
  };
  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      <Image
        src={
          "https://res.cloudinary.com/dspoer0rv/image/upload/v1733246604/TheMVP/Login%20Page/nn90inqgkyxvssrlnpld.webp"
        }
        alt={"Hero Image"}
        width={1000}
        height={2000}
        className="w-screen h-[300px] p-4"
      />
      <div className="absolute top-0 h-[calc(100vh_-_2rem)] left-0 flex flex-col items-start justify-between mt-8">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center px-20 pt-4 w-screen">
            <Image
              src={
                "https://res.cloudinary.com/dspoer0rv/image/upload/v1733242342/TheMVP/Login%20Page/wbvhjtepdohhmyjl23x5.webp"
              }
              alt={"Logo"}
              width={100}
              height={100}
              className="w-[7vw]"
            />
            <Button className="bg-white text-black rounded-full px-14 text-[0.9vw] font-semibold">
              Contact Us
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-10 w-screen">
            <div className="flex flex-col items-center space-y-2 text-white">
              <h1 className="font-semibold text-[1.7rem]">Welcome!</h1>
              <p className="font-medium text-[0.9rem] text-wrap text-center leading-snug">
                Use these awesome forms to login or create new <br />
                account in your project for free.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl space-y-16 shadow-xl w-[450px]">
              <div className="flex flex-col items-center">
                <Image
                  src={
                    "https://res.cloudinary.com/dspoer0rv/image/upload/v1733246460/TheMVP/Login%20Page/xq0o8wepovovygmicay9.webp"
                  }
                  alt={"Logo"}
                  width={1000}
                  height={2000}
                  className="w-44"
                />
                <h1 className="text-center text-[1vw]">
                  Integrating Efficiency
                </h1>
              </div>
              <form onSubmit={submit} className="flex flex-col space-y-8">
                {/* Phone Number */}
                <div className="flex flex-col space-y-1">
                  <label className="ml-2 text-[0.9rem]">Phone Number</label>
                  <Input
                    type="number"
                    placeholder="Your phone number"
                    className="text-black placeholder:text-slate-300 rounded-2xl p-5"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                {/* MPIN */}
                <div className="flex flex-col space-y-1">
                  <label className="ml-2 text-[0.9rem]">MPIN</label>
                  <Input
                    type="number"
                    placeholder="Your MPIN"
                    className="text-black placeholder:text-slate-300 rounded-2xl p-5"
                    onChange={(e) => setMpin(e.target.value)}
                  />
                </div>
                {/* Remember Me */}
                <div className="flex flex-row space-x-4">
                  <Switch className="bg-red-500 data-[state=checked]:bg-[#FF6700]" />
                  <h1 className="text-[0.9rem]">Remember Me</h1>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  {" "}
                  {/* Login Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#FF6700] text-white rounded-2xl p-6"
                  >
                    LOGIN
                  </Button>
                  {/* Forgot Password */}
                  <a>
                    <h1 className="text-[#FF6700] font-medium text-center text-[0.9rem]">
                      Forgot MPIN?
                    </h1>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row px-16 py-4 pt-16 justify-between text-[0.8rem]">
          <h1 className="text-slate-400">
            @ 2024, Made by{" "}
            <span className="text-[#FF6700] font-semibold">ONETKT</span> &
            Greyplatforms.
          </h1>
          <div className="flex flex-row space-x-16 text-slate-400">
            <a>Greyplatorms</a>
            <a>OneTKT</a>
            <a>Blog</a>
            <a>License</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

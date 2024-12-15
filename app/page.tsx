import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  SignUp
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="font-helvetica">
      <h1>Google</h1>
      {/* <SignedIn>
        <SignInButton />
      </SignedIn>
      <SignedOut>
        <UserButton />
      </SignedOut> */}
      {/* <SignUp routing="hash"/> */}
    </div>
  );
}

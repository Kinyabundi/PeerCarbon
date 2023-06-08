import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormControl from "@/components/forms/FormControl";
import useUserUtils from "@/hooks/useUserUtils";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { LuLock, LuUser } from "react-icons/lu";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useUserUtils();
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      toast("Please enter an email address", {
        icon: "🤔",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address", {
        icon: "🤔",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (password.length < 6) {
      toast("Password must be at least 6 characters", {
        icon: "🤔",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    setLoading(true);

    try {
      await signIn(email, password);
      //   show success toast
      toast("Login successful", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      //   redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      // @ts-ignore
      switch (err?.code) {
        case "auth/user-not-found":
          toast("User not found", {
            icon: "🤔",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          break;
        case "auth/wrong-password":
          toast("Wrong password", {
            icon: "🤔",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          break;
        default:
          toast("Something went wrong", {
            icon: "🤔",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-10 sm:h-8" src="/images/logo.png" alt="" />
          </div>

          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b"
            >
              sign in
            </a>
          </div>

          <FormControl
            labelText="Email Address"
            placeholder="newenergy@gmail.com"
            Icon={LuUser}
            inputType="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl
            labelText="Password"
            placeholder="********"
            Icon={LuLock}
            inputType="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-6">
            <PrimaryButton
              text="Sign In"
              onClick={onSubmit}
              isLoading={loading}
              loadingText="Authenticating ..."
              isWidthFull
            />
            <div className="mt-6 text-center ">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="mt-6 text-center ">
              <a
                href="/register"
                className="text-sm text-blue-500 hover:underline"
              >
                Don't have an account? Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

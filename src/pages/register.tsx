import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormControl, { UploadBtn } from "@/components/forms/FormControl";
import { LuLock, LuUser } from "react-icons/lu";

export default function Register() {
  return (
    <section className="bg-white my-8">
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
              sign up
            </a>
          </div>

          <FormControl
            labelText="Company Name"
            placeholder="New Energy"
            Icon={LuUser}
          />

          <FormControl
            labelText="Company Description"
            variant="textarea"
            placeholder="Tell us something about your company ..."
          />

          <UploadBtn btnText="Company Logo" labelText="Upload Logo" />

          <FormControl
            labelText="Email Address"
            placeholder="newenergy@gmail.com"
            Icon={LuUser}
            inputType="email"
          />

          <FormControl
            labelText="Password"
            placeholder="********"
            Icon={LuLock}
            inputType="password"
          />

          <FormControl
            labelText="Confirm Password"
            placeholder="********"
            Icon={LuLock}
            inputType="password"
          />

          <div className="mt-6">
            <PrimaryButton text="Create an Account" isWidthFull />
            <div className="mt-6 text-center ">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

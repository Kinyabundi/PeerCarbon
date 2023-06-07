import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormControl, { UploadBtn } from "@/components/forms/FormControl";
import { LuLock, LuUser } from "react-icons/lu";
import useUserUtils from "@/hooks/useUserUtils";
import {useState} from 'react'


export default function Register() {
  const [companyName, setCompanyName] = useState<string>("");
  const [companyDescription, setCompanyDescription] = useState<string>("");
  const [companyLogo, setCompanyLogo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [personelName, setPersonelName] = useState<string>("");
  const [personelRole, setPersonelRole] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

const { createUser } = useUserUtils();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userDetails = {
      companyName,
      companyDescription,
      companyLogo,
      email,
      personelName,
      personelRole,
      location,
    };
    
    try {
      await createUser(userDetails, password);
    } catch (error) {
      console.error(error);
    }

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
            required
          />

          <FormControl
            labelText="Company Description"
            variant="textarea"
            placeholder="Tell us something about your company ..."
            required
          />

          <UploadBtn btnText="Company Logo" labelText="Upload Logo" />

          <FormControl
            labelText="Email Address"
            placeholder="newenergy@gmail.com"
            Icon={LuUser}
            inputType="email"
            required
          />
          <FormControl
            labelText="Personel Name"
            placeholder="Elizabeth Smith"
            Icon={LuUser}
            required
          />
          <FormControl
            labelText="Personel Role"
            placeholder="Data Analyst"
            Icon={LuUser}
            required
          />
          <FormControl
            labelText="Location"
            placeholder="Nairobi, Kenya"
            Icon={LuUser}
            required
          />

          <FormControl
            labelText="Password"
            placeholder="********"
            Icon={LuLock}
            inputType="password"
            required
          />

          <FormControl
            labelText="Confirm Password"
            placeholder="********"
            Icon={LuLock}
            inputType="password"
            required
          />

          <div className="mt-6">
            <PrimaryButton text="Create an Account" isWidthFull
           
            />
            <div className="mt-6 text-center ">
              <a href="/login" className="text-sm text-blue-500 hover:underline">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

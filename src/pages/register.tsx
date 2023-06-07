import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormControl, { UploadBtn } from "@/components/forms/FormControl";
import useUserUtils from "@/hooks/useUserUtils";
import { IUser } from "@/types/User";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { LuLock, LuMail, LuPhone, LuUser } from "react-icons/lu";
import { MdConfirmationNumber } from "react-icons/md";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [corporateNo, setCorporateNo] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const logoRef = useRef(null);

  const { createUser } = useUserUtils();

  const handleLogoPick = (e: ChangeEvent<HTMLInputElement>) => {
    // check if there files
    if (!e?.target?.files?.length) return;
    const file = e?.target?.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setLogo(reader.result as string);
    };
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!name) {
      return toast.error("Company name is required");
    }

    if (!description) {
      return toast.error("Company description is required");
    }

    if (!logo) {
      return toast.error("Company logo is required");
    }

    if (!corporateNo) {
      return toast.error("Corporate number is required");
    }

    if (!phoneNo) {
      return toast.error("Phone number is required");
    }

    if (!email) {
      return toast.error("Email is required");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is invalid");
    }

    if (!password) {
      return toast.error("Password is required");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    if (!confirmPassword) {
      return toast.error("Confirm password is required");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);

    try {
      const companyDetails: IUser = {
        name,
        description,
        logo,
        email,
        phoneNo,
        corporateNo,
      };

      await createUser(companyDetails, password);

      toast("Your account has been created successful", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (err) {
      // catch the firebase error codes
      // @ts-ignore
      switch (err.code) {
        case "auth/email-already-in-use":
          toast.error("Email already in use");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email");
          break;
        case "auth/weak-password":
          toast.error("Weak password");
          break;
        default:
          toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormControl
            labelText="Company Description"
            variant="textarea"
            placeholder="Tell us something about your company ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {logo ? (
            <div className="flex items-center mt-6">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={logo}
                alt=""
              />

              <div className="ml-4">
                <UploadBtn
                  btnText={logo ? "Change Logo" : "Company Logo"}
                  labelText="Upload Logo"
                  pickerRef={logoRef}
                  onChange={(e) => handleLogoPick(e)}
                  value={logo}
                  accept="image/png"
                />
              </div>
            </div>
          ) : (
            <UploadBtn
              btnText={logo ? "Change Logo" : "Company Logo"}
              labelText="Upload Logo"
              pickerRef={logoRef}
              onChange={(e) => handleLogoPick(e)}
              value={logo}
            />
          )}

          <FormControl
            labelText="Corporate No"
            placeholder="Company's Corporate No"
            Icon={MdConfirmationNumber}
            value={corporateNo}
            onChange={(e) => setCorporateNo(e.target.value)}
          />
          <FormControl
            labelText="Company Phone No"
            placeholder="0712345678"
            Icon={LuPhone}
            inputType="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <FormControl
            labelText="Email Address"
            placeholder="newenergy@gmail.com"
            Icon={LuMail}
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

          <FormControl
            labelText="Confirm Password"
            placeholder="********"
            Icon={LuLock}
            inputType="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="mt-6">
            <PrimaryButton
              text="Create an Account"
              isLoading={loading}
              loadingText="Saving details ..."
              onClick={onSubmit}
              isWidthFull
            />
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

import React, { useState } from "react";
import type { User } from "../../types/user";

type Props = {
  user: User;
  handleSubmit: (phone: string) => void;
};

const Start = ({ handleSubmit, user }: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const [phone, setPhone] = useState("");

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl">Welcome {user.name}!</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="my-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-md font-medium cursor-pointer"
          >
            Add your phone number (optional)
          </label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            type="text"
            id="phone"
            className="bg-gray-200 text-md rounded-lg w-full p-4 outline-black text-gray-800"
            required
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="terms"
            className="flex mb-2 text-md cursor-pointer items-center"
          >
            <input
              type="checkbox"
              id="terms"
              className="mr-2 w-4 h-4"
              required
              onClick={onCheckboxClick}
            />
            <span>
              I agree to the <a href="/terms">Terms of Service</a>
            </span>
          </label>
        </div>
        <button
          onClick={() => handleSubmit(phone)}
          disabled={isDisabled}
          className="text-white bg-lime-500 font-medium rounded-lg text-xl w-full p-4 text-center disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Start;

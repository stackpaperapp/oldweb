import type { User } from "../../types/user";

type Props = {
  user: User;
};

const Start = ({ user }: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-3xl">Welcome {user.name}!</h1>
      <form>
        <div className="my-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium cursor-pointer"
          >
            Create a username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-200 text-md rounded-lg w-full p-4 outline-black"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-lime-500 font-medium rounded-lg text-xl w-full p-4 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Start;

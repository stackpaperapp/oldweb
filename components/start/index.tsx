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
            Create a username (optional)
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-200 text-md rounded-lg w-full p-4 outline-black text-gray-800"
            required
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="terms"
            className="block mb-2 text-sm font-medium cursor-pointer"
          >
            <input type="checkbox" id="terms" className="mr-2" required />I
            agree to the <a href="/terms">Terms of Service</a>
          </label>
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

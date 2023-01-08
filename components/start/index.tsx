import type { User } from "../../types/user";

type Props = {
  user: User;
};

const Start = ({ user }: Props) => {
  return (
    <div>
      <h2>Welcome {user.name}!</h2>
      <form>
        <div className="my-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Create a username
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-lime-700 hover:bg-lime-80 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Start;

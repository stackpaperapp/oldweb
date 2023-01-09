import Image from "next/image";

import useDarkMode from "use-dark-mode";
import { getDarkModeDescriptor } from "../../utils/accessibility";

type Props = {
  newAccount: boolean;
};

const Header = ({ newAccount }: Props) => {
  const darkMode = useDarkMode(false);

  return (
    <div className="flex justify-between items-center py-4">
      <div
        className={`flex-grow-1 basis-0 ${newAccount ? "text-slate-400" : ""}`}
      >
        Budgets
      </div>
      <div>
        <Image
          src={`/logo-256-${getDarkModeDescriptor(darkMode.value)}.png`}
          width={64}
          height={64}
          alt="Stack Paper"
        />
      </div>
      <div className="flex-grow-1 basis-0">
        <a href="/api/auth/logout">Logout</a>
      </div>
    </div>
  );
};

export default Header;

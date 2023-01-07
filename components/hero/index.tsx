import Image from "next/image";
import useDarkMode from "use-dark-mode";

import { getDarkModeDescriptor } from "../../utils/accessibility";

const Hero = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="mb-4">
      <Image
        src={`/logo-600x400-${getDarkModeDescriptor(darkMode.value)}.png`}
        alt="Stack Paper"
        width={600}
        height={400}
        priority
      />
      <div className="flex items-center justify-center">
        <p className="w-3/4 text-center">
          Keep track of your spending habits on the go, and save more
        </p>
      </div>
    </div>
  );
};

export default Hero;

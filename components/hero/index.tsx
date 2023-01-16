import { useTheme } from "next-themes";
import Image from "next/image";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  console.log({ resolvedTheme });

  return (
    <div className="mb-8">
      <div className="mb-2">
        <Image
          src={`/logo-600x400-${resolvedTheme}.png`}
          alt="Stack Paper"
          width={600}
          height={400}
          priority
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="w-3/4 text-center">
          Keep track of your spending habits on the go, and save more
        </p>
      </div>
    </div>
  );
};

export default Hero;

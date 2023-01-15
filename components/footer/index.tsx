import Image from "next/image";
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <footer>
      <div className="flex items-center justify-center flex-col my-4">
        <div className="flex items-center mb-4">
          <div className="mx-2">
            <a href="https://twitter.com/stackpaperapp">
              <Image
                src={`/twitter-${resolvedTheme}.svg`}
                alt="Twitter"
                width={32}
                height={32}
                priority
              />
            </a>
          </div>
          <div className="mx-2">
            <a href="https://github.com/stackpaperapp">
              <Image
                src={`/github-${resolvedTheme}.svg`}
                alt="Github"
                width={32}
                height={32}
                priority
              />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm italic">
            Made in Chicago by <a href="https://twitter.com/mager">@mager</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

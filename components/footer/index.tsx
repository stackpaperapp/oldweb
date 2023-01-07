import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t-8 border-cyan-200">
      <div className="flex items-center justify-center my-4">
        <div className="mx-2">
          <a href="https://twitter.com/stackpaperapp">
            <Image
              src="/twitter-light.svg"
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
              src="/github-light.svg"
              alt="Github"
              width={32}
              height={32}
              priority
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

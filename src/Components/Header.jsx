import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 768 });
  return isLargeScreen ? (
    <header className="bg-heroLarge h-1/2">
      <h1 className="text-white ml-40 pt-40 text-2xl min-w-fit">
        {" "}
        Review Corner!
      </h1>
    </header>
  ) : (
    <header className=" h-1/4 bg-heroSmall pt-14 pr-2">
      <h1 className="text-white ml-4 pt-12 text-2xl min-w-fit">
        Review Corner!
      </h1>
    </header>
  );
};

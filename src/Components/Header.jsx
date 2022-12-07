import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-red-900">
      <h1 className="mt-20 pt-4 bg-red-900 text-center text-5xl font-family: 'Eczar', serif;">
        Board Game Corner
      </h1>
      <p className="text-center text-xs mt-4 p-4">
        My stupid cousin thinks he's collected one of every board game ever
        made... <br />
        <br />
        That idiot doesn't have a Clue.
      </p>
    </header>
  );
};

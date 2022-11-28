import { Link } from "react-router-dom";
import { routeData } from "utils";

export const Header = () => {
  return (
    <header className="w-[86.7%] lg:w-[73%] mx-auto flex justify-between">
      <h1>Logo</h1>
      <nav>
        <ul className="flex gap-4">
          {routeData.map(({ path, text }) => (
            <li key={path.split("/")[1]} className="uppercase tracking-wide">
              <Link to={path}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

import { Header } from "components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      {/* <main className="pt-[6rem]"> */}
      <main className="absolute top-[6rem]">
        <Outlet />
      </main>
    </>
  );
};

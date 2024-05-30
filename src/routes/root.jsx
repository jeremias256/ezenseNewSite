import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="relative w-full">
      <Outlet />
    </div>
  );
}

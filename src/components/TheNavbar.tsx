import { openDialog } from "../store/store";
import PlusIcon from "./icons/PlusIcon";

export default function TheNavbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <PlusIcon onClick={() => openDialog("Create")} />
      </div>
    </div>
  );
}

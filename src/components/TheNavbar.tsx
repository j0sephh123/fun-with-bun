import { openDialog } from "../store/store";
import PhotoIcon from "./icons/PhotoIcon";
import PlusIcon from "./icons/PlusIcon";

export default function TheNavbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <button
          onClick={() => openDialog("Gallery_View")}
          className="btn btn-accent btn-sm"
        >
          Gallery
          <PhotoIcon />
        </button>

        <button
          onClick={() => openDialog("Create")}
          className="btn btn-primary btn-sm"
        >
          Create Project
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

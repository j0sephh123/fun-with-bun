import { useDialogStore } from "../../store/store";

export default function ConfirmDelete() {
  const { callback } = useDialogStore();

  const handleDelete = () => {
    if (callback && typeof callback === "function") {
      callback();
    }
  };

  return (
    <>
      <h1 className="prose pb-6 text-xl font-bold text-center">
        Are you sure?
      </h1>
      <div className="flex gap-4 justify-end">
        <button onClick={handleDelete} className="btn btn-error">
          Delete
        </button>
        <button className="btn btn-neutral">Cancel</button>
      </div>
    </>
  );
}

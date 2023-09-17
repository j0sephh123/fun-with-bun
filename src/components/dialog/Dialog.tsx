import { useDialogStore } from "../../store/store";
import ConfirmDelete from "./ConfirmDelete";
import DialogWrapper from "./DialogWrapper";

export default function Dialog() {
  const dialog = useDialogStore();

  return (
    <DialogWrapper>
      {dialog.type === "Create" && <div>Create</div>}
      {dialog.type === "Confirm Delete" && <ConfirmDelete />}
    </DialogWrapper>
  );
}

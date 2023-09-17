import { useDialogStore } from "../../store/store";
import CreateProjectForm from "../form/CreateProjectForm";
import ConfirmDelete from "./ConfirmDelete";
import DialogWrapper from "./DialogWrapper";

export default function Dialog() {
  const dialog = useDialogStore();

  return (
    <DialogWrapper>
      {dialog.type === "Create" && <CreateProjectForm />}
      {dialog.type === "Confirm Delete" && <ConfirmDelete />}
    </DialogWrapper>
  );
}

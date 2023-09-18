import { useDialogStore } from "../../store/store";
import Gallery from "../gallery/Gallery";
import CreateProjectForm from "../form/CreateProjectForm";
import ConfirmDelete from "./ConfirmDelete";
import DialogWrapper from "./DialogWrapper";

export default function Dialog() {
  const dialog = useDialogStore();

  return (
    <DialogWrapper>
      {dialog.type === "Create" && <CreateProjectForm />}
      {dialog.type === "Confirm Delete" && <ConfirmDelete />}
      {dialog.type === "Gallery" && <Gallery />}
    </DialogWrapper>
  );
}

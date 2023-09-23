import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api";
import { UploadsResponse } from "../../types";
import GalleryItem from "./GalleryItem";
import { DialogType, useDialogStore } from "../../store/store";

type Props = {
  dialogType: Extract<DialogType, "Gallery_View" | "Gallery_Pick">;
};

export default function Gallery({ dialogType }: Props) {
  const dialog = useDialogStore();
  const { data: uploads, refetch: refetchUploads } = useQuery<UploadsResponse>(
    ["uploads.get"],
    api.getAllUploads
  );

  const { mutate: handleDelete } = useMutation(api.deleteUpload, {
    onSuccess: () => refetchUploads(),
  });

  if (!uploads) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-between">
      {dialogType}
      {uploads.map((upload) => {
        const onClick = () => {
          if (dialogType === "Gallery_Pick") {
            const innerFunction = dialog.callback!();
            if (typeof innerFunction === "function") {
              innerFunction(upload.id);
            }
          } else {
            handleDelete(upload.id);
          }
        };

        return (
          <GalleryItem
            key={upload.id}
            src={upload.url}
            title={upload.name}
            onClick={onClick}
            actionLabel={dialogType === "Gallery_Pick" ? "Pick" : "Delete"}
          />
        );
      })}
    </div>
  );
}

import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api";
import { UploadsResponse } from "../../types";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
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

  console.log(uploads);

  return (
    <div className="flex flex-wrap justify-between">
      {uploads.map((upload) => (
        <GalleryItem
          key={upload.id}
          src={upload.url}
          title={upload.name}
          onDelete={() => handleDelete(upload.id)}
        />
      ))}
    </div>
  );
}

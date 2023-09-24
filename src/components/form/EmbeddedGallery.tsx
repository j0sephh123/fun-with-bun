import { useQuery } from "@tanstack/react-query";
import { UploadsResponse } from "../../types";
import GalleryItem from "../gallery/GalleryItem";
import { fetcherInstance } from "../../api/Fetcher";

type Props = {
  onUploadClick: (arg: number) => void;
  selectedUploadId: number | null;
};

export default function EmbeddedGallery({
  onUploadClick,
  selectedUploadId,
}: Props) {
  const { data: uploads } = useQuery<UploadsResponse>(
    ["uploads.get"],
    fetcherInstance.getAllUploads
  );

  if (!uploads) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-between">
      {uploads.map((upload) => (
        <GalleryItem
          key={upload.id}
          src={upload.url}
          title={upload.name}
          onClick={() => onUploadClick(upload.id)}
          actionLabel={selectedUploadId === upload.id ? "Remove" : "Pick"}
          isActive={selectedUploadId === upload.id}
        />
      ))}
    </div>
  );
}

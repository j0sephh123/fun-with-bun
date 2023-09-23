import { useState } from "react";
import api from "../../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import EmbeddedGallery from "./EmbeddedGallery";

export default function CreateProjectForm() {
  const { mutate: createProject } = useMutation(api.createProject, {
    onSuccess() {
      setName("");
      queryClient.invalidateQueries(["projects.get"]);
    },
  });
  const queryClient = useQueryClient();
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [isPickingFromGallery, setIsPickingFromGallery] = useState(false);
  const [selectedUploadId, setSelectedUploadId] = useState<number | null>(null);

  const handleCreateProject = async () => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({ name }));

    if (isPickingFromGallery && typeof selectedUploadId === "number") {
      api.createProjectWithExistingUpload({
        avatar: selectedUploadId,
        name,
      });
      return;
    }

    // check if avatar is empty, if it is -> make the request only with `name`
    if (avatar.length === 0) {
      createProject(formData);
      return;
    }

    const response = await api.downloadImage(avatar);

    // TODO extract status codes
    if (response.status === 404) {
      return;
    }
    const toBuffer = await response.arrayBuffer();
    const file = new File([toBuffer], `${name}.png`, { type: "image/png" });

    formData.append("files.avatar", file);

    createProject(formData);
  };

  return (
    <>
      <h1 className="prose text-2xl mb-4">Create a new project</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="input input-bordered w-full mb-4"
      />
      <div className="form-control items-start">
        <label className="label cursor-pointer">
          <span className="label-text">
            {isPickingFromGallery
              ? "Choose from Gallery"
              : "provide a valid url"}
          </span>
          <input
            type="checkbox"
            className="toggle"
            checked={isPickingFromGallery}
            onChange={() => setIsPickingFromGallery((prev) => !prev)}
          />
        </label>
      </div>

      {!isPickingFromGallery ? (
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Avatar"
          className="input input-bordered w-full mb-4"
        />
      ) : (
        <EmbeddedGallery
          selectedUploadId={selectedUploadId}
          onUploadClick={(uploadIdArg) =>
            setSelectedUploadId((prevSelectedUpload) => {
              if (prevSelectedUpload === uploadIdArg) {
                return null;
              }

              return uploadIdArg;
            })
          }
        />
      )}

      <button
        onClick={handleCreateProject}
        className="btn btn-primary btn-block"
      >
        Submit
      </button>
    </>
  );
}

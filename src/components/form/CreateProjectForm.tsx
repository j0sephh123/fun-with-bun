import { useState } from "react";
import api from "../../api";
import { useQueryClient } from "@tanstack/react-query";

export default function CreateProjectForm() {
  const queryClient = useQueryClient();

  const [avatar, setAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/com7/React-icon.svg/1200px-Reacton.png"
  );
  const [name, setName] = useState("");

  // valid url, but invalid img - https://upload.wikimedia.org/wikipedia/com7/React-icon.svg/1200px-Reacton.png
  const createProject = async () => {
    const response = await api.downloadImage(avatar);

    // TODO extract status codes
    if (response.status === 404) {
      return;
    }

    const toBuffer = await response.arrayBuffer();

    const file = new File([toBuffer], `${name}.png`, { type: "image/png" });

    const formData = new FormData();
    formData.append("data", JSON.stringify({ name }));
    formData.append(`files.avatar`, file);

    api
      .createProject(formData)
      .then((data) => {
        console.log("Project created:", data);
        setName("");
        queryClient.invalidateQueries(["projects.get"]);
      })
      .catch((error) => {
        console.error("There was an error creating the project", error);
      });
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
      <input
        type="text"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="Avatar"
        className="input input-bordered w-full mb-4"
      />

      <button onClick={createProject} className="btn btn-primary btn-block">
        Submit
      </button>
    </>
  );
}

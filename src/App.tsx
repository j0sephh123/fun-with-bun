import { useEffect, useState } from "react";
import TableWrapper from "./components/table/TableWrapper";
import TableRow from "./components/table/TableRow";
import api from "./api";

function App() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [projects, setProjects] = useState<any[]>([]);

  const createProject = async () => {
    const fileBlob = await api.downloadImage(avatar);
    const toBuffer = await fileBlob.arrayBuffer();
    const file = new File([toBuffer], `${name}.png`, { type: "image/png" });

    const formData = new FormData();
    formData.append("data", JSON.stringify({ name }));
    formData.append(`files.avatar`, file);

    api
      .createProject(formData)
      .then((data) => {
        console.log("Project created:", data);
        setName("");
        api.fetchProjects(setProjects);
      })
      .catch((error) => {
        console.error("There was an error creating the project", error);
      });
  };

  useEffect(() => {
    api.fetchProjects(setProjects);
  }, []);

  const deleteUpload = async () => {
    const result = await api.deleteUpload(17);

    console.log(result);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="Avatar"
        className="input input-bordered w-full max-w-xs"
      />

      <button onClick={createProject} className="btn btn-primary btn-block">
        Primary
      </button>

      <button onClick={deleteUpload} className="btn btn-secondary btn-block">
        Delete Upload
      </button>

      <TableWrapper isEmpty={projects.length === 0}>
        {projects.map((project) => {
          console.log(project.attributes);

          return (
            <TableRow
              key={project.id}
              elements={[
                <img
                  className="mask"
                  src={
                    project.attributes.avatar.data
                      ? "http://localhost:1337" +
                        project.attributes.avatar.data.attributes.url
                      : "https://placehold.co/80x80.png"
                  }
                  width={80}
                  height={80}
                  alt=""
                />,
                project.attributes.name,
                new Date(project.attributes.createdAt).toLocaleString(),
                new Date(project.attributes.updatedAt).toLocaleString(),
              ]}
            />
          );
        })}
      </TableWrapper>
    </>
  );
}

export default App;

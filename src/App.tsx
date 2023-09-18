import { useQuery } from "@tanstack/react-query";
import TableWrapper from "./components/table/TableWrapper";
import TableRow from "./components/table/TableRow";
import api from "./api";
import TrashIcon from "./components/icons/TrashIcon";
import { openDialog } from "./store/store";
import { ProjectsResponse } from "./types";

function App() {
  const { data: projects, refetch } = useQuery<ProjectsResponse>(
    ["projects.get"],
    api.fetchProjects
  );

  const deleteUpload = async () => {
    const result = await api.deleteUpload(17);

    console.log(result);
  };

  if (!projects) {
    return null;
  }

  return (
    <>
      <button onClick={deleteUpload} className="btn btn-secondary btn-block">
        Delete Upload
      </button>

      <TableWrapper
        isEmpty={projects === undefined || projects.data.length === 0}
      >
        {projects.data.map((project) => (
          <TableRow
            key={project.id}
            elements={[
              <img
                className="mask"
                src={
                  project.attributes.avatar?.data
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
              <button
                onClick={() =>
                  openDialog("Confirm Delete", () =>
                    api.deleteProject(project.id).then(refetch)
                  )
                }
                className="btn btn-square btn-sm"
              >
                <TrashIcon />
              </button>,
            ]}
          />
        ))}
      </TableWrapper>
    </>
  );
}

export default App;

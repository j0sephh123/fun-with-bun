import { useQuery } from "@tanstack/react-query";
import TableWrapper from "./components/table/TableWrapper";
import TableRow from "./components/table/TableRow";
import api from "./api";
import TrashIcon from "./components/icons/TrashIcon";
import { openDialog } from "./store/store";
import { ProjectsResponse } from "./types";
import Avatar from "./Avatar/Avatar";
import PlusIcon from "./components/icons/PlusIcon";

function App() {
  const { data: projects, refetch } = useQuery<ProjectsResponse>(
    ["projects.get"],
    api.fetchProjects
  );

  if (!projects) {
    return null;
  }

  return (
    <>
      <TableWrapper
        isEmpty={projects === undefined || projects.data.length === 0}
      >
        {projects.data.map((project) => (
          <TableRow
            key={project.id}
            elements={[
              <>
                <div className="relative hover:opacity-50 group w-20">
                  <Avatar avatar={project.attributes.avatar} />

                  <div className="absolute inset-0 flex justify-end items-start opacity-0 group-hover:opacity-100">
                    {project.attributes.avatar?.data ? (
                      <button
                        onClick={() =>
                          openDialog("Confirm Delete", () =>
                            api
                              .deleteUpload(
                                project.attributes.avatar?.data.id as number
                              )
                              .then(() => refetch())
                          )
                        }
                        className="btn btn-square btn-xs"
                      >
                        <TrashIcon />
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          openDialog("Confirm Delete", () =>
                            api
                              .deleteUpload(
                                project.attributes.avatar?.data.id as number
                              )
                              .then(() => refetch())
                          )
                        }
                        className="btn btn-square btn-xs"
                      >
                        <PlusIcon />
                      </button>
                    )}
                  </div>
                </div>
              </>,
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

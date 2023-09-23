// TODO create
// base fetcher,
// projects fetcher,
// upload fetcher,
// server fetcher

import { SetProjectUploadParams } from "./apiTypes";

const projectsBaseUrl = "/api/projects";
const uploadsUrl = "/api/upload/files/";
const serverUrl = "/server";

// TODO add interface as well
class Fetcher {
  // projects
  public static deleteProject(id: number) {
    return fetch(`${projectsBaseUrl}/${id}`, {
      method: "DELETE",
    });
  }
  public static fetchProjects() {
    return fetch(`${projectsBaseUrl}?populate=*`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
  }
  public static createProjectWithExistingUpload(body: {
    avatar: number;
    name: string;
  }) {
    return fetch("/api/projects", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ data: body }),
    }).then((r) => r.json());
  }
  public static createProject(formData: FormData) {
    return fetch(projectsBaseUrl, {
      method: "POST",
      body: formData,
    });
  }
  public static setProjectUpload({
    projectId,
    avatarId,
    onComplete,
  }: SetProjectUploadParams) {
    return fetch(`/api/projects/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          avatar: avatarId,
        },
      }),
    }).then(() => onComplete());
  }

  // uploads
  public static deleteUpload(id: number) {
    return fetch(`${uploadsUrl}${id}`, {
      method: "DELETE",
    });
  }
  public static getAllUploads() {
    return fetch("/api/upload/files", {
      method: "GET",
    }).then((r) => r.json());
  }

  // server
  public static downloadImage(externalUrl: string) {
    return fetch(`${serverUrl}/image`, {
      method: "POST",
      body: JSON.stringify({ externalUrl }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}

export default Fetcher;

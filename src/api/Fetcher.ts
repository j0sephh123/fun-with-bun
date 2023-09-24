import BaseFetcher from "./BaseFetcher";
import { SetProjectUploadParams } from "./apiTypes";

const projectsBaseUrl = "/api/projects";
const uploadsUrl = "/api/upload/files/";
const serverUrl = "/server";

class Fetcher extends BaseFetcher {
  private static instance: Fetcher;

  private constructor() {
    super("/api"); // Initialize with the base API URL
  }

  public static getInstance(): Fetcher {
    if (!Fetcher.instance) {
      Fetcher.instance = new Fetcher();
      Fetcher.instance.fetchProjects = Fetcher.instance.fetchProjects.bind(
        Fetcher.instance
      );
    }
    return Fetcher.instance;
  }

  // projects
  public deleteProject(id: number) {
    return this.fetchWrapper(`/projects/${id}`, "DELETE");
  }

  public async fetchProjects() {
    return this.fetchWrapper(`/projects?populate=*`);
  }

  public createProjectWithExistingUpload(body: {
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

  public createProject(formData: FormData) {
    return fetch(projectsBaseUrl, {
      method: "POST",
      body: formData,
    });
  }

  public setProjectUpload({
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
  public deleteUpload(id: number) {
    return fetch(`${uploadsUrl}${id}`, {
      method: "DELETE",
    });
  }

  public getAllUploads() {
    return fetch("/api/upload/files", {
      method: "GET",
    }).then((r) => r.json());
  }

  // server
  public downloadImage(externalUrl: string) {
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

export const fetcherInstance = Fetcher.getInstance();

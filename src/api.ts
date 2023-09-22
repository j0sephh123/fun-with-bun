// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchProjects = () =>
  fetch("/api/projects?populate=*", {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());

// not used
const deleteUpload = (id: number) =>
  fetch(`/api/upload/files/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });

type SetProjectUploadParams = {
  projectId: number;
  avatarId: number | null;
  onComplete: VoidFunction;
};

const setProjectUpload = ({
  projectId,
  avatarId,
  onComplete,
}: SetProjectUploadParams) => {
  fetch(`/api/projects/${projectId}`, {
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
};

const getAllUploads = () =>
  fetch("/api/upload/files", {
    method: "GET",
  }).then((r) => r.json());

const downloadImage = async (externalUrl: string) =>
  fetch("/server/image", {
    method: "POST",
    body: JSON.stringify({ externalUrl }),
    headers: {
      "Content-type": "application/json",
    },
  });

const createProject = async (formData: FormData) =>
  fetch("/api/projects", {
    method: "POST",
    body: formData,
  }).then((r) => r.json());

const deleteProject = async (id: number) =>
  fetch(`/api/projects/${id}`, {
    method: "DELETE",
  }).then((r) => r.json());

const api = {
  fetchProjects,
  downloadImage,
  deleteUpload,
  createProject,
  deleteProject,
  getAllUploads,
  setProjectUpload,
};

export default api;

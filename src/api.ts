// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchProjects = (callback: (arg: any) => void) => {
  fetch("/api/projects?populate=*", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      callback(data.data);
    });
};

const deleteUpload = (id: number) =>
  fetch(`/api/upload/files/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });

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

const api = {
  fetchProjects,
  downloadImage,
  deleteUpload,
  createProject,
};

export default api;
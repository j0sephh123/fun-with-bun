import Fetcher from "./Fetcher";

const api = {
  fetchProjects: Fetcher.fetchProjects,
  downloadImage: Fetcher.downloadImage,
  deleteUpload: Fetcher.deleteUpload,
  createProject: Fetcher.createProject,
  deleteProject: Fetcher.deleteProject,
  getAllUploads: Fetcher.getAllUploads,
  setProjectUpload: Fetcher.setProjectUpload,
  createProjectWithExistingUpload: Fetcher.createProjectWithExistingUpload,
};

export default api;

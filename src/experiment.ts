import api from "./api";

// TODO refactor later
export const outerFunction =
  (projectId: number, onComplete: VoidFunction) => (avatarId: number) =>
    api.setProjectUpload({ projectId, avatarId, onComplete });

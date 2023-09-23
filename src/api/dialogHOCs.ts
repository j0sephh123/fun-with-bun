import api from "./api";

export const prepareProjectAvatarUpdate =
  (projectId: number, onComplete: VoidFunction) => (avatarId: number) =>
    api.setProjectUpload({ projectId, avatarId, onComplete });

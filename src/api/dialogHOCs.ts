import { fetcherInstance } from "./Fetcher";

export const prepareProjectAvatarUpdate =
  (projectId: number, onComplete: VoidFunction) => (avatarId: number) =>
    fetcherInstance.setProjectUpload({ projectId, avatarId, onComplete });

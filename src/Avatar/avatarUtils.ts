import { baseApiUrl } from "../config";
import { Avatar } from "../types";

export const handleImageSrc = (avatar: Avatar | null) =>
  avatar?.data
    ? baseApiUrl + avatar.data.attributes.url
    : "https://placehold.co/80x80.png";

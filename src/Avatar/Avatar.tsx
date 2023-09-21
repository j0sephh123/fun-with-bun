import { baseApiUrl } from "../config";
import { Avatar } from "../types";
import { handleImageSrc } from "./avatarUtils";

type Props = {
  avatar: string | (Avatar | null);
};

export default function Avatar({ avatar }: Props) {
  return (
    <img
      src={
        typeof avatar === "string"
          ? `${baseApiUrl}${avatar}`
          : handleImageSrc(avatar)
      }
      width={80}
      height={80}
      alt=""
    />
  );
}

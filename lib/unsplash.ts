import { photos } from "@/lib/photos";
import "server-only";

export const getPhotos = async () => {
  return photos;
};

export const getPhoto = async (id: string) => {
  return photos[Number(id)];
};

import PhotoDetails from "@/components/PhotoDetails";
import type { Photo } from "@/lib/types";
import { notFound } from "next/navigation";
import { getPhoto } from "@/lib/unsplash";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

const PhotoPage = async ({ params }: PhotoPageProps) => {
  const photo = await getPhoto(params.id);

  if (!photo) {
    notFound();
  }

  return (
    <PhotoDetails
      src={photo}
      alt=""
      photographer={{
        name: "John Doe",
        instagram: "@johndoe",
      }}
    />
  );
};

export default PhotoPage;

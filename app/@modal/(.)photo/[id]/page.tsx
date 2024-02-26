import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import { notFound } from "next/navigation";
import { getPhoto } from "@/lib/unsplash";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

const PhotoModalPage = async ({ params }: PhotoModalPageProps) => {
  const photo = await getPhoto(params.id);

  if (!photo) {
    notFound();
  }

  return (
    <Modal>
      <PhotoDetails
        src={photo}
        alt=""
        photographer={{
          name: "John Doe",
          instagram: "@johndoe",
        }}
      />
    </Modal>
  );
};

export default PhotoModalPage;

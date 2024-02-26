import Link from "next/link";
import Image from "next/image";

import { photos } from "@/lib/photos";

const HomePage = async () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="aspect-1 overflow-hidden">
          <Link href={`/photo/${index}`}>
            <Image
              src={photo}
              width={600}
              height={600}
              alt=""
              className="h-full object-cover object-center"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

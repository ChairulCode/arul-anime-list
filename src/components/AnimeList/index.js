import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((animeTop) => (
        <Link
          key={animeTop.mal_id}
          href={`${animeTop.mal_id}`}
          className="cursor-pointer"
        >
          <Image
            src={animeTop.images.jpg.image_url}
            width={300}
            height={350}
            className="w-full max-h-64 object-cover scale-100"
            alt=""
            loading="eager"
          />
          <h1 className="font-bold  md:text-xl text-md p-4">
            {animeTop.title}
          </h1>
        </Link>
      ))}
    </div>
  );
};
export default AnimeList;

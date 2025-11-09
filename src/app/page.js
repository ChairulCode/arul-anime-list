import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList/index";

const Page = async () => {
  // untuk api top anime
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title="Top Anime" linkhref="/top" linkTitle="Top Anime" />
        <AnimeList api={topAnime} />
      </section>

      {/* section anime terbaru */}
      <section>
        <Header
          title="Paling baru"
          linkhref="/new"
          linkTitle="Tonton Sekarang"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;

import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image:
        "https://www.zdnet.com/a/img/resize/da306ce1134c2635447cc9b11cd82cdd0efd3c26/2023/10/23/b68ec227-69f8-449b-a915-a1e03b050c77/retro-robots-gettyimages-817180358.jpg?auto=webp&width=1280",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      {/* Hero section */}
      <section className="pink_container">
        <h1 className="heading">
          Pich Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote Pitches, and Get Notice in Virtual Competions.
        </p>
        <SearchForm query={query} />
      </section>

      {/* Startup section */}
      <section className="section_container">
        <p className="text-30-semibold">
          {/* search posts */}
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {/* map posts */}
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}

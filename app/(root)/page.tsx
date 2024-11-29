import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // real-time search using query params
  const query = (await searchParams).query;
  const params = { search: query || null };

  // fetch posts from sanity - revalidate when never new changes are made
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

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
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}

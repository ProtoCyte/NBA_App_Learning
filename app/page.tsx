import { CustomFilter, Hero, SearchBar, TeamCard } from "@/components";
import { fetchTeamStats, fetchTeams } from "@/utils";
import Image from "next/image";

export default async function Home() {

  const allTeams = await fetchTeams();
  
  const isDataEmpty = !Array.isArray(allTeams) || allTeams.length < 1 || !allTeams;
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            NBA Teams
          </h1>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="East/West "/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allTeams?.map((team) => (
                <TeamCard team={team} />
              ))}

            </div>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold"> No Teams found</h2>
          </div>

        )}

      </div>
    </main>
  );
}

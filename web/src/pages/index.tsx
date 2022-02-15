import Footer from "@/components/Footer/Footer";
import SearchBar from "@/components/SearchBar";

const Home = (): JSX.Element => (
  <div className="bg-gray-900 h-screen flex flex-col items-center">
    <div className="w-full flex flex-col justify-center items-center p-4 bg-gray-800 text-base leading-relaxed">
      <SearchBar />
      <span className="text-gray-300 text-xs">
        (Entrer le pseudo du streamer)
      </span>
    </div>
    <div className="h-full flex flex-col justify-center items-center">
      <div className="h-1/2 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl">Twitch Clips Manager</h1>
          <h2 className="text-4xl">Trouver et Télécharger vos clips favoris</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-xl">
          <p>Télécharger tous les clips crées pendant un live</p>
          <p>
            Télécharger les meilleurs clips d&apos;une période d&apos;un
            streamer
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;

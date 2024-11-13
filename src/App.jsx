import "./App.css";
import EmblaCarousel from "./components/EmblaCarousel";
import "./css/embla.css";

function App() {
  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <div className="lg:w-96 w-full h-full flex relative overflow-hidden bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          <EmblaCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;

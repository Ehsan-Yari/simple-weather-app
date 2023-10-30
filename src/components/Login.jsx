import { FiArrowRight } from "react-icons/fi";

const Login = ({ setPosition }) => {
  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      console.log("something went wrong");
    }
  };
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <img className="w-1/3 lg:w-1/6 -rotate-12" src="/umbrella.svg" alt="logo" />
      <h1 className="text-7xl text-gray-900 font-semibold mt-20 mb-4">
        Breeze
      </h1>
      <h2 className="text-3xl text-gray-400 font-medium ">Weather App</h2>
      <button
        onClick={handleGetLocation}
        className="mt-20 bg-blue-400 p-3 rounded-full"
      >
        <FiArrowRight size="2rem" color="white" />
      </button>
    </main>
  );
};

export default Login;

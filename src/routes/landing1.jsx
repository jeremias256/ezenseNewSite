import useEzense from "../hooks/useEzenseProvider";
import videoDrone from "../assets/drone.mp4";

const Landing1 = () => {
  const { auxState, setAuxState } = useEzense();
  return (
    <div>
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoDrone} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Contenido sobre el video
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing1;

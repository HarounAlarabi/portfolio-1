import video from '../../images/bgvideo-5.webm';

function VideoBg() {
  return (
    <div className="absolute z-[-1] h-[50%] w-full overflow-hidden object-fill opacity-30">
      <video autoPlay loop muted className="h-full w-full object-cover">
        <source src={video} type="video/webm" />
      </video>
    </div>
  );
}

export default VideoBg;

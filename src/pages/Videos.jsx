
import '../styles/video.css';
import videoFondo from '../assets/videos/videoFondo.mp4';

export const Videos = () => {
  return (
    <div className='div'>
      <video src={videoFondo} autoPlay muted loop ></video>
      <div className="content">
        <h1>Michi Sideral</h1>
      </div>
    </div>
  );
};
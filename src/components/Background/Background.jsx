import '../components.css';

function Background() {
  return (
    <div>
      {/* Video de fondo */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/liyue-lantern-rite-genshin-impact-moewalls-com.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>
  );
}

export default Background;  
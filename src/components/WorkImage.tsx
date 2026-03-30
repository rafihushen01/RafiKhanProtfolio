import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  comingSoon?: boolean;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const isLinkEnabled = Boolean(props.link);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const mediaContent = (
    <>
      {isLinkEnabled && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {props.comingSoon && <div className="work-coming-soon">Coming Soon</div>}
      <img src={props.image} alt={props.alt} />
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      {isLinkEnabled ? (
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noreferrer"
          data-cursor={"disable"}
        >
          {mediaContent}
        </a>
      ) : (
        <div
          className="work-image-in work-image-static"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          data-cursor={"disable"}
        >
          {mediaContent}
        </div>
      )}
    </div>
  );
};

export default WorkImage;

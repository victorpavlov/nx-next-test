import styles from './you-tube.module.css';

/* eslint-disable-next-line */
export interface YouTubeProps {
  title: string;
  uid: string;
}

export function YouTube(props: YouTubeProps) {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
      ></iframe>
    </div>
  );
}

export default YouTube;

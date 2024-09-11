import classNames from "classnames/bind";
import styles from "./ViewVideo.module.scss";

const cx = classNames.bind(styles);

function Video({ src }) {
    return (
        <video className={cx("video")} controls>
            <source src={src} type="video/mp4" />
            My Video
        </video>
    );
}

export default Video;

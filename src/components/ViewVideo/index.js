import classNames from "classnames/bind";
import styles from "./ViewVideo.module.scss";
import Video from "./Video";
import Images from "../Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faCommentDots,
    faHeart,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import { AddFollowUser } from "../Icons";

const cx = classNames.bind(styles);

function ViewVideo({ video }) {
    return (
        <div className={cx("wrapper")}>
            <Video src={video.file_url} />
            <div className={cx("action-bar")}>
                <div className={cx("avatar-box")}>
                    <Images
                        src="https://files.fullstack.edu.vn/f8-tiktok/videos/3712-666b02d8b13bb.jpg"
                        alt="Test"
                        className={cx("avatar")}
                    />
                    <button className={cx("add-follow")}>
                        <AddFollowUser />
                    </button>
                </div>

                <button className={cx("btn-action")}>
                    <span className={cx("icon-box")}>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faHeart}
                        />
                    </span>
                    <span className={cx("title")}>
                        <strong>{video.likes_count}</strong>
                    </span>
                </button>
                <button className={cx("btn-action")}>
                    <span className={cx("icon-box")}>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faCommentDots}
                        />
                    </span>
                    <span className={cx("title")}>
                        <strong>{video.comments_count}</strong>
                    </span>
                </button>
                <button className={cx("btn-action")}>
                    <span className={cx("icon-box")}>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faBookmark}
                        />
                    </span>
                    <span className={cx("title")}>
                        <strong>{video.views_count}</strong>
                    </span>
                </button>
                <button className={cx("btn-action")}>
                    <span className={cx("icon-box")}>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faShare}
                        />
                    </span>
                    <span className={cx("title")}>
                        <strong>{video.shares_count}</strong>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default ViewVideo;

import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Images from "../../Images";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <Images
                    className={cx("avatar")}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7322974625531428866.jpeg?lk3s=a5d48078&nonce=8349&refresh_token=b6a6f8d8435a35bf9bf164e974746578&x-expires=1725858000&x-signature=KfqK%2BdBdpeadda6PZaS4CLra5SQ%3D&shp=a5d48078&shcp=81f88b70"
                    alt="Test"
                />
                <Button className={cx("follow-btn")} primary>
                    Follow
                </Button>
            </header>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>trinhmanhcuong</strong>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx("name")}>Trịnh Mạnh Cường</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

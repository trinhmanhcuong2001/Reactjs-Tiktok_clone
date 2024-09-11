import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Images from "../Images";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[1000, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <Images
                        className={cx("avatar")}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7322974625531428866.jpeg?lk3s=a5d48078&nonce=8349&refresh_token=b6a6f8d8435a35bf9bf164e974746578&x-expires=1725858000&x-signature=KfqK%2BdBdpeadda6PZaS4CLra5SQ%3D&shp=a5d48078&shcp=81f88b70"
                        alt=""
                    />
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>trinhmanhcuong</strong>
                            <FontAwesomeIcon
                                className={cx("check")}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx("name")}>Trịnh Mạnh Cường</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

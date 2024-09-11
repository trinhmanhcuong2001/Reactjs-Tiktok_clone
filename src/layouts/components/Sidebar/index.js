import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "../../../config";
import Menu from "./Menu";
import { MenuItem } from "./Menu";
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from "../../../components/Icons";
import SuggestedAccounts from "../../../components/SuggestedAccounts";
import { Link } from "react-router-dom";
import Images from "../../../components/Images";

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUse = false;
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                {currentUse && (
                    <MenuItem
                        title="Profile"
                        to={config.routes.profile}
                        avatar={
                            <Images
                                src="https://files.fullstack.edu.vn/f8-tiktok/videos/3029-64eaed76a8f20.jpg"
                                alt="Test"
                                className={cx("avatar")}
                            />
                        }
                    />
                )}
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />

            <div className={cx("footer-sidebar")}>
                <h4 className={cx("footer-sidebar_title")}>
                    <Link to={config.routes.home}>Company</Link>
                </h4>
                <h4 className={cx("footer-sidebar_title")}>
                    <Link to={config.routes.home}>Program</Link>
                </h4>
                <h4 className={cx("footer-sidebar_title")}>
                    <Link to={config.routes.home}>Terms & Policies</Link>
                </h4>
                <p className={cx("footer-sidebar_copyright")}>@ 2024 Tiktok</p>
            </div>
        </aside>
    );
}

export default Sidebar;

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../../assets/images";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "../../../components/Button";
import Menu from "../../../components/Popper/Menu";
import { InboxIcon, MessageIcon } from "../../../components/Icons";
import Image from "../../../components/Images";
import Search from "../Search";
import { Link } from "react-router-dom";
import config from "../../../config";
import { useState } from "react";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];
function Header() {
    const [currentUser, setCurrentUser] = useState(true);

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View Profile",
            to: "/@hoaa",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Logout",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("logo")}>
                    <Link to={config.routes.home} className={cx("logo-link")}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Button
                                outline
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                className={cx("action-upload")}
                            >
                                Upload
                            </Button>
                            <Tippy content="Message">
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/awem/100x100/tos-alisg-avt-0068/c7cfa8faab2c7a8c37b90f22e1eb4392.jpeg?lk3s=a5d48078&nonce=85450&refresh_token=724b28c2152ca156753e2de074c5d583&x-expires=1725076800&x-signature=Im7R511pGqFCWnBR7p3lS%2B7uoNw%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx("user-avatar")}
                                alt="Nguyễn Văn A"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

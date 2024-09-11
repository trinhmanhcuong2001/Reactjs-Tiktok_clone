import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { Wrapper as PopperWrapper } from "../../Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        }
                    }}
                />
            );
        });
    };

    const removeHistory = () => {
        setHistory((pre) => pre.slice(0, history.length - 1));
    };
    return (
        <Tippy
            delay={[0, 700]}
            interactive={true}
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={removeHistory}
                            />
                        )}
                        <div className={cx("menu-body")}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.proTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
};

export default Menu;

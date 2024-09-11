import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image className={cx("avatar")} src={data.avatar} alt={data.bio} />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    {data.full_name}
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx("check")}
                        />
                    )}
                </h4>
                <span className={cx("user-name")}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;

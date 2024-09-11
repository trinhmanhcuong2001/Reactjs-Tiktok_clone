import { useEffect, useRef, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import AccountItem from "../../../components/AccountItem";
import HeadlessTippy from "@tippyjs/react/headless";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { useDebounce } from "../../../hooks";
import * as searchService from "../../../services/searchService";

const cx = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([]);
            return;
        }
        fetchApi(debouncedValue);
        // eslint-disable-next-line
    }, [debouncedValue]);

    const fetchApi = async () => {
        setLoading(true);
        const result = await searchService.search(debouncedValue);
        setSearchResults(result);
        setLoading(false);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResults.length > 0}
                render={(attrs) => (
                    <div
                        className={cx("search-results")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResults &&
                                searchResults.map((data) => (
                                    <AccountItem key={data.id} data={data} />
                                ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={(e) => {
                            e.target.value = e.target.value.trimStart();
                            setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <button
                            className={cx("clear")}
                            onClick={() => {
                                setSearchValue("");
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={cx("loading")}
                        />
                    )}

                    <button
                        className={cx("search-btn")}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

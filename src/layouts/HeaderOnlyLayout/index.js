import Header from "../components/Header";

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnlyLayout;

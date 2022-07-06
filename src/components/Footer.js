import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear()

    const footerContent = () => {
        return (
            <div>
                <span className="copyright">&copy;</span>
                <span>{year} Ming Liu </span>
                <span className="diamond">&diams;</span>
                <span> mingliudev</span>
                <span className="at">@</span>
                <span>gmail.com </span>

                {/* {
                    viewType === "mobile"
                        ? <br />
                        : viewType === "full"
                            ? <span className="diamond">&diams;</span>
                            : null
                } */}
                <span className="diamond">&diams;</span>

                <span> Built in NY with </span>
                <span className="heart">♥</span>
                <span> and React</span>
            </div>
        )
    }

    return (
        <div className="footer-inner">
            {/* <div className="mobile-footer">
                {footerContent("mobile")}
            </div> */}
            <div className="full-footer">
                {footerContent("full")}
            </div>
        </div>
    )
}

export default Footer;
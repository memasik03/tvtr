const searchInputRef = useRef(null);

const hideKeyboardOnScroll = () => {
    const handleScroll = () => {
        if (searchInputRef.current) {
            searchInputRef.current.blur();
        }
        document.removeEventListener("scroll", handleScroll, true);
    };

    document.addEventListener("scroll", handleScroll, true);
};

import React from "react"

const Hijo = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return <div>
        <h2 className={`${isDarkMode ? "dark" : "light"}`}>Hijo</h2>
    </div>
}

export default Hijo

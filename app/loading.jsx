"use client"
import Cliploader from "react-spinners/ClipLoader"

const override = {
    display: "block",
    margin: "100px auto",
}

const loading = ({ loading }) => {
  return (
    <Cliploader
        color="#3b82f6"
        loading={loading}
        size={150}
        cssOverride={override}
        aria-label="Loading Spinner"
    />
  )
}

export default loading
import { useEffect } from "react"

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} || Grocery Shop`
    }, [title])

}

export default useTitle;
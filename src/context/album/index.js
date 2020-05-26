import { useContext } from 'react'
import AppContext from "../app"

const useAlbums = () => {

    const [appStorage, setStorage] = useContext(AppContext)

    const setAlbums = albums => {      
        setStorage( 
            prevState => ({...prevState, albums})
        )
        console.log(albums)
    }

    return {
        albums: appStorage.albums,
        setAlbums       
    }
}

export default useAlbums;
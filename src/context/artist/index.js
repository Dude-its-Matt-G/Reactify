import { useContext } from 'react'
import AppContext from "../app"

const useArtist = () => {

    const [appStorage, setStorage] = useContext(AppContext)

    const setArtist = artist => {      
        setStorage( 
            prevState => ({...prevState, artist})
        )
        console.log(artist)
    }

    return {
        artist: appStorage.artist,
        setArtist       
    }
}

export default useArtist;
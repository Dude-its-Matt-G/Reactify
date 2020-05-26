import { useContext } from 'react'
import AppContext from "../app"

const useTracks = () => {

    const [appStorage, setStorage] = useContext(AppContext)

    const setTheTracks = tracks => {      
        setStorage( 
            prevState => ({...prevState, tracks})
        )
        console.log(tracks)
    }

    return {
        tracks: appStorage.tracks,
        setTheTracks       
    }
}

export default useTracks;
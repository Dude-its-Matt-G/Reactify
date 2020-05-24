import { spotyArtist, header } from '../config';

const getData = async (props) => {
  const res = await fetch(`${spotyArtist.url}?q=${props.value}&type=${spotyArtist.type}`,{headers:header})
  const data = await res.json();
  console.log (data);
}

export default getData

import Filter from "./Filter"
import { useGetWomenQuery } from "../features/api/apiSlice"
const Women = () => {

   const section='women' 
  const {
    data: women,
    isLoading,
    isSuccess,
    isError,
  } = useGetWomenQuery(section);


  if (isLoading) {
    return <p>Loading...</p>
  } else if (isSuccess) {

    return <Filter products={women} />
  } else if (isError) {
    return <p>There was an error</p>
  }
}

export default Women
import { useGetMenQuery } from "../features/api/apiSlice"
import Filter from "./Filter";

const Men = () => {
  const section='men'
  const {
    data: men,
    isLoading,
    isSuccess,
    isError,
  } = useGetMenQuery(section);


  if (isLoading) {
    return <p>Loading...</p>
  } else if (isSuccess) {
    return <Filter products={men} />
  } else if (isError) {
    return <p>There was an error</p>
  }
}
export default Men
import { useGetSeasonSaleQuery} from "../features/api/apiSlice";
import Filter from './Filter';

const MidSeasonSale = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
  } = useGetSeasonSaleQuery();

   if (isLoading) {
    return <p>Loading...</p>
  } 
  
  if (isError) {
    return <p>There was an error</p>
  }
  
  if(isSuccess){
 let allProductsArr=[]
  for (const key in data) {
      const element = data[key];
      allProductsArr.push(...element);
  }  
  allProductsArr=allProductsArr.filter((item)=>item.oldPrice);

  return <Filter products={allProductsArr}/>
  }
}

export default MidSeasonSale
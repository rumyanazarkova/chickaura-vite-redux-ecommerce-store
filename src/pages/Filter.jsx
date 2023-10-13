import ProductList from '../components/ProductList'
import styled from 'styled-components';
import {
  loadAllProducts,
  sortByPriceLowest,
  sortByPriceHighest,
  sortByNewest,
  filterBySize,
  filterByType,
  filterByColor
} from '../features/filter/filterSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueValues, getUniqueColors } from '../helpers';


const Filter = ({ products }) => {
  const dispatch = useDispatch()
  const [sortByFilter, setSortByFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [colorFilter, setColorFilter] = useState('All');

  useEffect(() => {
    dispatch(loadAllProducts(products))
  }, [products, dispatch])

  const filteredProducts = useSelector((state) => state.filter.filteredProducts)

  const allSizes = ['S', 'M', 'L', 'XL']
  const allTypes = getUniqueValues(products, 'type')
  const allColors = getUniqueColors(products)

  const filterCommands = ['Price Lowest', 'Price Highest', 'Newest', 'Default']

  const handleSortBy = (e) => {
    const selectedFilter = e.target.value;
    setSortByFilter(selectedFilter);

    switch (selectedFilter) {
      case 'Price Lowest':
        dispatch(sortByPriceLowest());
        break;
      case 'Price Highest':
        dispatch(sortByPriceHighest());
        break;
      case 'Newest':
        dispatch(sortByNewest());
        break;

      case 'Default':
        dispatch(loadAllProducts(products));
        break;

      default:
        console.warn(`No filter action set for ${selectedFilter}`);
    }
  }

  const handleSize = (e) => {
    const selectedFilter = e.target.value;
    setSizeFilter(selectedFilter);
    dispatch(filterBySize(selectedFilter));
  }

  const handleType = (e) => {
    const selectedFilter = e.target.value;
    setTypeFilter(selectedFilter);
    dispatch(filterByType(selectedFilter));
  }
  const handleColors = (e) => {
    const selectedFilter = e.target.value;
    setColorFilter(selectedFilter);
    dispatch(filterByColor(selectedFilter))
  }

  return <Wrapper>

    <div className='form-control'>

      <select name='price-newest' value={sortByFilter}
        onChange={handleSortBy}
        className='select'>
       <option value="default-value" hidden>SORT BY</option>
        {filterCommands.map((command, index) => {
          return <option key={index} value={command}>{command}</option>
        })}
      </select>

      <select name='size' value={sizeFilter}
        onChange={handleSize}
        className='select'>
          <option value="default-value" hidden>SIZE</option>
        {allSizes.map((size, index) => {
          return <option key={index} value={size}>{size}</option>
        })}
      </select>

      <select name='colors' value={colorFilter} onChange={handleColors} className='select'>
      <option value="default-value" hidden>COLORS</option>
        {Object.keys(allColors).map((colorName, index) => (
          <option
            key={index}
            value={colorName} 
          >
            {colorName}
          </option>
        ))}
      </select>


      <select name='type' value={typeFilter}
        onChange={handleType}
        className='select'>
           <option value="default-value" hidden>TYPE</option>
        {allTypes.map((type, index) => {
          return <option key={index} value={type}>{type}</option>
        })}
      </select>

      <button 
      className='reset btn'
      onClick={()=> dispatch(loadAllProducts(products))}
      >Clear Filters</button>
       
    </div>

    <ProductList products={filteredProducts} />

  </Wrapper>
}

const Wrapper = styled.main`
.form-control{
padding:1rem 2rem;
display:flex ;
flex-direction:column;
flex-wrap:wrap;
gap:.3rem;
}
.select{
color:var(--clr-dark-grey);
border:none;
font-size: .8rem;
font-weight: 500;
margin:.3rem 0;
cursor:pointer;
}
.reset {
padding:.4rem .6rem;
margin-left:.3rem;
}
@media (min-width:580px) {
.form-control{
flex-direction: row;
}
.select{
font-size: 1rem;
margin:0;
} 
.reset {
padding:.5rem 1rem;
margin-left:.5rem;
}
@media(min-width:1200px){
  .select{
font-size: 1.2rem;
} 
}

}
`

export default Filter
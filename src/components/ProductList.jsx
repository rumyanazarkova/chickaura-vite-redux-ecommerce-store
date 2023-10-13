import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { formatPrice } from '../helpers';
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav} from '../features/favorites/favoritesSlice';

const ProductList = ({ products }) => {
  const favorites = useSelector((state) => state.favorites.favItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <Wrapper>
    {products.map((item) => {
      const { id, image, name, price, oldPrice,category } = item;

      return <article key={id} >
        <div className='favs-img'>
          <button className='favs-btn'>
            {favorites.find((item) => item.id === id) ?
              (<IoHeart onClick={() => dispatch(removeFav({ item, id }))} />) : (
                <IoHeartOutline onClick={() => dispatch(addFav({ item, id }))} />
              )
            }
          </button>

          <img src={image} alt='image' onClick={() => navigate(`/${category}/${id}`)} />
        </div>

        <div className="name-price">
          <p>{name}</p>
          <div className='price'>
            {oldPrice ?
              <p className="price-on-sale">{formatPrice(price)}</p>
              : <p>{formatPrice(price)}</p>}
            {oldPrice ?
              <p className="old-price">{formatPrice(oldPrice)}</p>
              : null}
          </div>
        </div>
      </article>
    })
    }
  </Wrapper>
}

const Wrapper = styled.main`
display:grid;

 article{
  padding: 1.2rem .5rem;
  display: grid;
  gap:.5rem;
  place-items:center;
 }

 img{
  width:100%;
  cursor: pointer;
 }
 .favs-img{
  position: relative;
  padding:0 1rem;
 }
.name-price{
  width:90%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap:.2rem;
}
.price{
  display: flex;
  gap:.5rem;
}
.old-price{
  text-decoration: line-through;
  color:var(--clr-old-price);
}
.price-on-sale{
  color:var(--clr-light-red);
}
.favs-btn{
  position: absolute;
  top:1rem;
  left:2rem;
  font-size:2rem;
  border: none;
  background: transparent;
  cursor: pointer;
}
@media (min-width:500px){
  grid-template-columns: 1fr 1fr;
}
@media (min-width:1000px){
  .favs-btn{
  top:1.5rem;
  left:2.5rem;
  font-size:2.5rem;
}
}
`
export default ProductList
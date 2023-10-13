import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { clearAllFavs } from "../features/favorites/favoritesSlice";
import SingleFavoritesItem from "../components/SingleFavoritesItem";

const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoritesArr = useSelector((state) => state.favorites.favItems);

  if (favoritesArr.length === 0) {
    return <article className="empty-section">
        <h3 className="heading">Your Favorites</h3>
        <h5>SAVE YOUR FAVORITE ITEMS</h5>
        <p className="empty-section-text">Want to keep your favorite items? Just click on the item's heart symbol and it will appear here.</p>
        <button onClick={() => navigate('/')}
          className="empty-section-btn">Take a look now</button>
      </article>
  
  }

  return <Wrapper>
    <h3 className="heading">Your Favorites</h3>
    <section className="fav-items-container">
    {favoritesArr.map((favItem) => {
      const { item, id } = favItem
      return <SingleFavoritesItem key={id} item={item} />
    })}
    </section>
    <button className='big btn' onClick={() => dispatch(clearAllFavs())}>Clear Favorites</button>
  </Wrapper>

}

const Wrapper = styled.main`
 display:grid;
 padding:1rem;
 gap:1rem;
 .fav-items-container{
  display:grid;
  gap:1rem;
 }
.big{
  padding:.5rem .5rem;
  font-size: .8rem;
   margin: 1rem auto;
   width: 200px; 
}
@media (min-width: 500px) {
  .fav-items-container{
  grid-template-columns: 1fr 1fr;
 }
}
@media (min-width: 1000px) {
  margin:0 10em;

}
`

export default Favorites
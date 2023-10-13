
import styled from 'styled-components';
import React, { useEffect } from 'react';

function StoreLocator() {
  useEffect(() => {
    const loadMapScenario = () => {
      var map = new window.Microsoft.Maps.Map(document.getElementById('map-container'), {
        credentials:import.meta.env.VITE_BING_MAPS_API_CREDENTIALS,
        center: new window.Microsoft.Maps.Location(42.680134, 23.329941), 
        zoom: 12
      });


      var storeLocations = [
        { name: 'Store 1', address: 'Mall of Sofia', location: new window.Microsoft.Maps.Location(42.69806, 23.30861) },
        { name: 'Store 2', address: 'The Mall', location: new window.Microsoft.Maps.Location(42.670151, 23.366414) },
        { name: 'Store 3', address: 'Paradise Center', location: new window.Microsoft.Maps.Location(42.657780, 23.314444) }
      ];


      storeLocations.forEach(store => {
        var pushpin = new window.Microsoft.Maps.Pushpin(store.location, {
          icon: '../public/poi-black-custom.png',
          title: store.name,
          subTitle: store.address,
          text: 'C'
        });


        map.entities.push(pushpin);
      });
    };

    if (window.Microsoft && window.Microsoft.Maps) {
      loadMapScenario();
    }
  }, []);

  return <Wrapper>
    <div id="map-container"></div>
  </Wrapper>
}

const Wrapper=styled.div`
#map-container{
  height:400px;
  width:100%
}

`

export default StoreLocator;






import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RestaurantList from './components/RestaurantList';
import BackgroundImg from './rest-search-background-img.png';
import Sideinfo from './components/SideInfo';

const noScroll = (event) => {
  event.preventDefault();
}
　document.addEventListener('touchmove', noScroll, { passive: false });
　document.addEventListener('mousewheel', noScroll, { passive: false });

const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const ApiKey = process.env.REACT_APP_REST_SEARCH_APIKEY;
    const onSearchSubmit = async(term) => {
        try{
          const params = {
            keyid : ApiKey,
            freeword : term,
          };
         const response = await axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/",{params});
         setRestaurants([]);
         setRestaurants(response.data.rest);
         document.getElementById("info").style.display="block";
         document.removeEventListener('touchmove', noScroll, { passive: false });
         document.removeEventListener('mousewheel', noScroll, { passive: false });
         if(response.data.total===0){
             window.alert('お探しの店舗は見つかりませんでした。');
         }
        }catch{
          window.alert('店舗の検索に失敗しました。');
        }
    };
    
   return (
    <div className='ui container' style={{marginTop: '60px'}}>
        <div className='logo' style={{ textAlign: 'right' }}>
           <a href="https://api.gnavi.co.jp/api/scope/" target="_blank">
            <img src="https://api.gnavi.co.jp/api/img/credit/api_90_35.gif" width="90" height="35" border="0" alt="グルメ情報検索サイト　ぐるなび" />
           </a>
        </div>
        <SearchBar onSubmit={onSearchSubmit}/>   
        <div className='ui grid' style={{paddingTop: '25px'}}>
            <div className='twelve wide column'>
               <RestaurantList restaurants={restaurants}/>
            </div>
            <div className='four wide column'>
             <div className="sticky" style={{position: '-webkit-sticky', position: 'sticky', top: '0', left: '0'}}>
            　　 <Sideinfo/>
            </div>
            </div>
        </div>
        <style className="background-img">{'body { background-image: url('+BackgroundImg+')}'}</style>
        <style>{'body { background-size: cover}'}</style>
        <style>{'body { background-attachment: fixed}'}</style>
        <div className="app-name" style={{fontSize: 90, color: 'white', textAlign: 'center', paddingTop: '150px', fontFamily: 'Kaushan Script'}}>Rest Search</div>
        <div className="app-message" style={{fontSize: 30, color: 'white', textAlign: 'center', paddingTop: '100px', fontFamily: 'Kaushan Script'}}>〜お店探しをもっとシンプルに〜</div>
    </div>
   );
};

export default App;
import React from 'react';

const RestaurantList = (props) => {
    const restaurants = props.restaurants.map((restaurant) => {
        return (
            <div className="ui segment" style={{marginTop: '20px'}}>
            　　<a href={restaurant.url} key={restaurant.id} target="_blank" rel='noopener noreferrer'>
                　{restaurant.name}
               </a>
               <div className="ui segment"> 
                <dvi className="pr top">
                 <div className="ui doubling grid">
                  <img src={restaurant.image_url.shop_image1} width="350px" height="300px"/>
                  <div className="kuchikomi-info">
                   <div className="kuchikomi-container"　style={{marginLeft: '34px', marginTop: '100px'}}>
                   <p style={{textAlign: 'center'}}>{restaurant.name}</p>
                   <p className="mese" style={{textAlign: 'center'}}>口コミ・予約情報はこちら</p>
                   <div className="button" style={{marginTop: "30px"}}>
                   <a
                      className="ui red button" 
                      href={restaurant.url}    
                      key={restaurant.id}
                      target="_blank"
                      rel='noopener noreferrer'>
                      ぐるなび口コミ
                   </a>
                   <a
                      className="ui red button" 
                      href={restaurant.url}  
                      key={restaurant.id}
                      target="_blank"
                      rel='noopener noreferrer'>
                      ぐるなび予約
                   </a>
                   </div>
                  </div>
                  </div>
                 </div>
                 </dvi>
                 <div className="pr bottom" style={{marginTop: '40px'}}>
                   <p>{restaurant.pr.pr_long}</p>
                 </div>
               </div>
               <div>
                   アクセス
                 <p>{restaurant.address}　　{restaurant.access.line} {restaurant.access.station} {restaurant.access.station_exit} 徒歩{restaurant.access.walk}分</p>
                   電話番号
                 <p>{restaurant.tel}</p>
                   営業時間
                 <p>{restaurant.opentime}</p>
                   休業日
                 <p>{restaurant.holiday}</p>
               </div>
            </div>      
        )
    })
    return (
    　　<div>{restaurants}</div>
    );
};

export default RestaurantList;
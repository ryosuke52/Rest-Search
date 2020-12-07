import React from 'react';

const Sideinfo = () => {
    return (
       <div className="ui segment" id="info" style={{textDecoration: 'underline', textAlign: 'center', display: 'none'}}>
         <div className="goto-info" style={{paddingTop: '15px'}}>
           <a href="https://r.gnavi.co.jp/plan/campaign/gotoeat/"　target="_blank">
               <div style={{fontSize: 17, paddingBottom: '10px'}}>▶︎ GoToイートキャンペーン ◀︎</div>
               <div style={{fontSize: 12}}>
                  <a style={{color: 'red'}}>ポイント付きネット予約受付中</a>
                  <p style={{paddingTop: '5px', paddingBottom: '5px'}}>
                      還元ポイントと食事券はそれぞれの利用可能期間中は使用できます
                 </p>
                  感染対策を行い飲食店を利用しましょう
               </div>
           </a>
         </div>
         <div className="net-info" style={{paddingTop: '40px'}}>
           <a href="https://www.gnavi.co.jp/?ptlp=1&utm_id=type-t_tci1702_pc_af"　target="_blank">
              <div style={{fontSize: 19}}>▶︎ ぐるなびネット予約 ◀︎</div>
              <p style={{paddingTop: '5px', color: 'red', textDecoration: 'underline red'}}>ランチもディナーもお得</p>
           </a>
         </div>

         <div className="netsub-info" style={{paddingTop: '40px'}}>
             <a href="https://r.gnavi.co.jp/area/jp/party/?ptlp=1&utm_id=type-t_tci1702_pc_af"　target="_blank">
                 <p style={{fontSize: 14}}>▶︎ ネット予約ができるお店情報 ◀︎</p>
             </a>
         </div>
       </div>
    );
};

export default Sideinfo;
import React, { useState } from 'react';

const SearchBar = ({onSubmit}) => {
   const [term, setTerm] = useState('');
   const onFormSubmit = (event) => {
    　event.preventDefault();
      onSubmit(term);
   };
    return (
       <div className='ui segment'>
         <form onSubmit={onFormSubmit} className="ui form">
           <div className="field">
             <label style={{ fontSize: 24 }}>Rest Search</label>
             <input 
                type="text" 
                name="restaurant-info" 
                placeholder="お店を探す" 
                value={term} 
                onChange={(event) => {
                  setTerm(event.target.value)
                }}
              />
           </div>
         </form>
      </div>
    );
};
export default SearchBar;
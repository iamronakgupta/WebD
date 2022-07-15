import React,{useState} from 'react';

export default function SearchBox(props) {
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      console.log(e.target)
      //doubt e.target =='<input type="checkbox">'
      
        setChecked(!checked);
        props.handleInputValue(!checked);
      
    };

    const handleSearchChange=(e)=>{
        props.handleSearchValue(e.target.value)
    }
    return (
      <form>
        <input type="text" placeholder="Search..." onChange={handleSearchChange} />
        <br></br>
        <label>
          <input type="checkbox" onChange={handleChange} />
          Only Show Product in stock
        </label>
      </form>
    );
  }
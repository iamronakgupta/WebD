
export default function Stocked(props) {

    
    if (props.value.stocked == true) {
      return <td>{props.value.name}</td>;
    } else {
      return <td className="stocked">{props.value.name}</td>;
    }
  }
  
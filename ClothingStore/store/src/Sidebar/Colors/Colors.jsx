import Input from "../../components/Input"
import "./Colors.css"

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label">
        <input type="radio" onChange={handleChange} value="" name="test2" />
        <span className="checkmark all"></span>All
      </label>
 <Input 
 handleChange={handleChange}
 value="black"
 title="Black"
 name="test"
 color="black"
 />
 <Input 
 handleChange={handleChange}
 value="blue"
 title="Blue"
 name="test"
 color="blue"
 />
 <Input 
 handleChange={handleChange}
 value="red"
 title="Red"
 name="test"
 color="red"
 />
 <Input 
 handleChange={handleChange}
 value="green"
 title="Green"
 name="test"
 color="green"
 />
 <Input
 handleChange={handleChange}
 value="white"
 title="White"
 name="test"
 color="white"
 />
    </div>
  )
}

export default Colors
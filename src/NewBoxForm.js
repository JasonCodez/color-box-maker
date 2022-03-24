import {useState} from "react";

const NewBoxForm = ({addItem}) => {
   const INITIAL_STATE = {
      backgroundColor: "",
      width: "",
      height: ""
   }
   const [formData, setFormData] = useState(INITIAL_STATE);
   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(formData => ({
         ...formData,
         [name]: value
      }))
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      const {backgroundColor, width, height} = formData;
      addItem(backgroundColor, width, height);
      setFormData(INITIAL_STATE);
   }
   return (
      <div>
         <h2>Add New Box</h2>
         <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background Color </label>
            <input 
               id="backgroundColor" 
               type="text"
               name="backgroundColor" 
               autoComplete="off" 
               placeholder="background color" 
               value={formData.backgroundColor} 
               onChange={handleChange}
               required
            />
            <label htmlFor="width">Width </label>
            <input 
               id="width" 
               type="text" 
               name="width" 
               autoComplete="off" 
               placeholder="width" 
               value={formData.width} 
               onChange={handleChange}
               required
            />
            <label htmlFor="height">Height </label>
            <input 
               id="height" 
               type="text" 
               name="height" 
               autoComplete="off" 
               placeholder="height" 
               value={formData.height} 
               onChange={handleChange}
               required
            />
            <button>Add Box</button>
         </form>
      </div>
   )
}

export default NewBoxForm;
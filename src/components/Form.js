import React from 'react'
import {useState, useEffect} from 'react'

const Form = ({moviesearch}) => {

    // statee to store the date of our form
    const [formData, setFormData] = useState({searchterm: ''});

    // handleChange 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});

    }

    // function to handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        moviesearch(formData.searchterm);
    };

   return (
    <section>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='searchterm'
                onChange={handleChange}
                value={formData.searchterm}
            />
            <input 
                type='submit'
                value='submit'
            />
        </form>
    </section>
  )
}

export default Form
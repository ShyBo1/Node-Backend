import React from 'react'

function Signup() {
    let {formdata, setFormdata} = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormdata({
            ...formdata, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = await.fetch ('https://example.com/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await.response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div class="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div class="inside">
                    <div class="one">
                        <input type="text" name="firstname" class='input-field'
                         placeholder='Firstname' onChange={handleChange} required />
                    </div>
                    <div class="two">
                        <input type="text" name="lastname" class='input-field'
                         placeholder='Lastname' onChange={handleChange} required />
                    </div>
                    <div class="three">
                        <input type="email" name="email" class='input-field'
                         placeholder='Email' onChange={handleChange} required />
                    </div>
                    <div class="four">
                        <input type="password" name="password" class='input-field'
                         placeholder='Password' onChange={handleChange} required />
                    </div>
                    <div class="five">
                        <button type="submit">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    );
  return (
    <div className="inside" style={{color:'black'}}>
        <div className="one">
            <input type="text" className='input-field'
             placeholder='Firstname'/>
        </div>
        <div className="two">
            <input type="text" className='input-field'
             placeholder='Lastname'/>
        </div>
        <div className="three">
            <input type="email" className='input-field'
             placeholder='Email'/>
        </div>
        <div className="four">
            <input type="password" className='input-field'
             placeholder='Password'/>
        </div>
         <div className="five">
            <button>Sign up</button>
         </div>
    </div>
  )
}

export default Signup
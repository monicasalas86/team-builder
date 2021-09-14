import React from 'react'

export default function TeamForm(props) {
    const {values, update, submit } = props
    
    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={submit}>
            <div className='form-inputs'>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        onChange={onChange}
                        value={values.name}
                    />    
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        placeholder='email'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label>Role 
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>---Select a Role</option>
                        <option value='intern'>Intern</option>
                        <option value='backend'>Backend Engineer</option>
                        <option value='frontend'>Frontend Engineer</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}
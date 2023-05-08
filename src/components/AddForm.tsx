import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import SearchDepartment from './SearchDepartment';
import './AddForm.style.css';

type Props = {
    onAdd: (item: Item) => void;
};

type Item = {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    departmentName: string;
};

const Department = [
    { id: 1, depName: 'IT' },
    { id: 2, depName: 'HR' },
    { id: 3, depName: 'Finance' },
    { id: 4, depName: 'Sales' },
    { id: 5, depName: 'Marketing' },
]

export default function AddForm(props: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentName, setDepartmentName] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const item: Item = {
            id: uuid(),
            name,
            email,
            phoneNumber,
            departmentName,
        };

        props.onAdd(item);

        setName('');
        setEmail('');
        setPhoneNumber('');
        setDepartmentName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="list-header">Employee Registration</h2>
            <div className="form-group">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type='text'
                        className='form-control'
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type='text'
                        className='form-control'
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="department">Department</label>
                    <SearchDepartment
                        departments={Department}
                        value={departmentName}
                        onChange={(event) => setDepartmentName(event.toString())}
                    />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </div>
        </form>
    );
}


import { useState, useEffect } from 'react';
import './EditForm.style.css';

type Props = {
    item: Item;
    onSave: (item: Item) => void;
    onCancel: () => void;
};

type Item = {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    departmentName: string;
};

export default function EditForm(props: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentName] = useState('');

    useEffect(() => {
        setName(props.item.name);
        setEmail(props.item.email);
        setPhoneNumber(props.item.phoneNumber);
    }, [props.item]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const item: Item = {
            id: props.item.id,
            name,
            email,
            phoneNumber,
            departmentName,
        };

        props.onSave(item);
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <button type="submit" className="save">
                    Save
                </button>
                <button type="button" className="cancel" onClick={props.onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

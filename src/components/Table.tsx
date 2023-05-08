import './Table.style.css';

type Props = {
    items: Item[];
    onEdit: (item: Item) => void;
    onDelete: (id: string) => void;
};

type Item = {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    departmentName: string;
};

export default function Table(props: Props) {
    return (
        <div>
            <br></br>
            <hr></hr>
            <h2 className="list-header">Employee List</h2>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.departmentName}</td>
                            <td>
                                <button type="button" className="edit" onClick={() => props.onEdit(item)}>
                                    Edit
                                </button>
                                <button type="button" className="delete" onClick={() => props.onDelete(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

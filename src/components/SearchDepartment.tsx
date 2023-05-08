import React, { useState } from "react";

type Props = {
    departments: Department[];
    value: string | null;
    onChange: (value: string) => void;
};

type Department = {
    id: number;
    depName: string;
};

const SearchDepartment: React.FC<Props> = ({ departments, onChange }) => {
    const [inputValue] = useState('');
    const filteredDepartments = departments.filter((department) =>
        department.depName.toLowerCase().includes(inputValue.toLowerCase())
    );

    const Department = [
        { id: 1, depName: 'IT' },
        { id: 2, depName: 'HR' },
        { id: 3, depName: 'Finance' },
        { id: 4, depName: 'Sales' },
        { id: 5, depName: 'Marketing' },
    ]

    return (
        <div>
            <input
                list="Department"
                onChange={(event) => {
                    const selectedDepartment = Department.find((d) => d.depName === event.target.value);
                    if (selectedDepartment && selectedDepartment.depName) {
                        onChange(selectedDepartment.depName);
                    }
                }}
            />
            <datalist id="Department">
                {filteredDepartments.map((department) => (
                    <option key={department.id} value={department.depName} />
                ))}
            </datalist>
        </div>
    );
}

export default SearchDepartment;

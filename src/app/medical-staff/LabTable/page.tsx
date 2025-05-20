'use client'
import React, { useState } from 'react';

type SubCategory = {
    id: number;
    name: string;
    thirdRow: string;
    fourthRow: string;
}

const LabTable: React.FC = () => {
    const subCategories: SubCategory[] = [
        { id: 1, name: "PUS Cell", thirdRow: "/hpf", fourthRow: "Crystals: " },
        { id: 2, name: "Red Blood Cell", thirdRow: "/hpf", fourthRow: "Calcium Oxalate" },
        { id: 3, name: "Epithelial Cell", thirdRow: "/lpf", fourthRow: "Uric Acid" },
        { id: 4, name: "Mucus Threads", thirdRow: "/lpf", fourthRow: "Casts:" },
        { id: 5, name: "Amorphous Substrates", thirdRow: "/lpf", fourthRow: "Hyaline" },
        { id: 6, name: "Bacteria", thirdRow: "/lpf", fourthRow: "Fine/Coarse Granular" },
        { id: 7, name: "Yeast Cell", thirdRow: "/lpf", fourthRow: "Others:" }
    ]

    const items = [{ id: 1, name: "allen" }, { id: 2, name: "Aldous" }, { id: 3, name: "aldope" }]

    type SelectedItem = {
        name: string;
        id: number;
    }
    // For Selecting Items 
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectsItem, setSelectItem] = useState<number[]>([]);

    const selectItem = (id: any) => {
        setSelectItem(id);
        console.log(id);
    }

    const toggleItem = (id: number) => {
        setSelectedItems(prev =>
            //condition 👇
            prev.includes(id)
                //If true do this 👇
                ? prev.filter(itemId => itemId !== id)
                //If false do this 👇
                : [...prev, id]);
        console.log(selectedItems)
    };
    
    const tableHeaders = ["Name", "Age", "Sex", "Birthdate", "Requested By", "Date"];

    const inputFields = ["Name", "Age", "Sex", "Birthdate", "Requested By", "Date"];
    return (
        <div className="grid grid-cols-[200px_1fr] gap-4">




            <div className="h-screen bg-[#1B5B5D] text-center text-white font-bold p-2">
                Services
            </div>

            <div className="min-w-0">
                <div className='flex gap-x-10'>
                    {items.map((item, name) => {
                        return (
                            <button key={item.id} onClick={() => selectItem(item.id)}>
                                Button {item.name}
                            </button>
                        )
                    })}
                </div>

                <h2 className='text-4xl font-bold'> Urinalysis </h2>

                {subCategories.map((subcategory) => {
                    return (
                        <button key={subcategory.id}
                            className='border-2 p-2 m-2'
                            onClick={() => toggleItem(subcategory.id)}
                        >
                            {subcategory.name}
                        </button>
                    )
                })}

                <h2 className='font-bold text-3xl mb-2'> Patient Details </h2>
                <table className="w-full border-collapse border border-gray-400 table-fixed">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className="border border-gray-400 px-4 py-2 text-center">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {inputFields.map((field, index) => (
                                <td key={index} className="border border-gray-400 px-4 py-2 text-center">
                                    <input
                                        required
                                        placeholder={field}
                                        className="w-full box-border text-center"
                                    />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>

                {/* Second Table */}
                <div>
                    <h2 className="font-bold text-3xl">Urinalysis</h2>
                    <table className='w-full border-collapse border border-gray-400 table-fixed mt-4'>
                        <tbody>
                            {selectedItems.map((id) => {
                                const item = subCategories.find(subcategory => subcategory.id === id);
                                if (!item) return null;
                                return (
                                    <tr key={item.id}>
                                        <td> {item.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default LabTable;

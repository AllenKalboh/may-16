'use client'
import React, { useState } from 'react';
import { X } from 'lucide-react';

const LabTable: React.FC = () => {
    const subCategories = ["PUS Cell", "Red Blood Cell", "Epithelial Cell", "Mucus Threads", "Amorphous Substrates", "Bacteria", "Yeast Cell"]
    const subCategoriesObject = [{
        id: 1,
        name: "PUS Cell",
        thirdRow: "/hpf",
        fourthRow: "Crystals:",
    },
    {
        id: 2,
        name: "Red Blood Cell",
        thirdRow: "/hpf",
        fourthRow: "Calcium Oxalate",
    },
    {
        id: 3,
        name: "Epithelial Cell",
        thirdRow: "/lpf",
        fourthRow: "Uric Acid",
    },
    {
        id: 4,
        name: "Mucus Threads",
        thirdRow: "/lpf",
        fourthRow: "Casts:",
    },
    {
        id: 5,
        name: "Amorphous Substrates",
        thirdRow: "/lpf",
        fourthRow: "Hyaline",
    },
    {
        id: 6,
        name: "Bacteria",
        thirdRow: "/lpf",
        fourthRow: "Fine/Coarse Granular",
    },
    {
        id: 7,
        name: "Yeast Cell",
        thirdRow: "/lpf",
        fourthRow: "Others:",
    },

    ]

    const [item1Selected, setItem1Selected] = useState(false);
    const [item2Selected, setItem2Selected] = useState(false);
    const [item3Selected, setItem3Selected] = useState(false);
    const [item4Selected, setItem4Selected] = useState(false);
    const [item5Selected, setItem5Selected] = useState(false);
    const [item6Selected, setItem6Selected] = useState(false);
    const [item7Selected, setItem7Selected] = useState(false);

    const changeState = () => {
        setItem1Selected(true);
    }

    return (
        <div className="grid grid-cols-[200px_1fr] gap-4">
            <div className="h-screen bg-[#1B5B5D] text-center text-white font-bold p-2">
                Services
            </div>
            <div className="min-w-0">
                <h2 className='text-4xl font-bold'> Urinalysis </h2>
                <button className='border-2 p-2 m-2' onClick={() => changeState()}> Pus Cell </button>
                <button className='border-2 p-2 m-2' onClick={() => setItem2Selected(true)}> Red Blood Cell </button>
                <button className='border-2 p-2 m-2' onClick={() => setItem3Selected(true)}> Epithelial Cell </button>
                <button className='border-2 p-2 m-2' onClick={() => setItem4Selected(true)}> Mucus Threads </button>
                <button className='border-2 p-2 m-2' onClick={() => setItem5Selected(true)}> Amorphous Substrates </button>
                <button className='border-2 p-2 m-2' onClick={() => setItem6Selected(true)}> Bacteria </button>
                <button className='border-2 p-2 m-2' onClick={() => setItem7Selected(true)}> Yeast Cell </button>
                <h2 className='font-bold text-3xl mb-2'> Patient Details </h2>
                <table className="w-full border-collapse border border-gray-400 table-fixed">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2 text-center">Name</th>
                            <th className="border border-gray-400 px-4 py-2 text-center">Age</th>
                            <th className="border border-gray-400 px-4 py-2 text-center">Sex</th>
                            <th className="border border-gray-400 px-4 py-2 text-center">Birthdate</th>
                            <th className="border border-gray-400 px-4 py-2 text-center">Requested By</th>
                            <th className="border border-gray-400 px-4 py-2 text-center">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2 text-center">
                                <input required placeholder="name" className="w-full box-border text-center" />
                            </td>
                            <td className="border border-gray-400 px-4 py-2 text-center">
                                <input required placeholder="age" className="w-full box-border text-center" />
                            </td>
                            <td className="border border-gray-400 px-4 py-2 text-center">
                                <input required placeholder="sex" className="w-full box-border text-center" />
                            </td>
                            <td className="border border-gray-400 px-4 py-2 text-center">
                                <input required placeholder="birthdate" className="w-full box-border text-center" />
                            </td>
                            <td className="border border-gray-400 px-4 py-2 text-center">
                                <input required placeholder="requested by" className="w-full box-border text-center" />
                            </td>
                            <td className="border border-gray-400 px-4 py-2 text-center">
                                <input required placeholder="date" className="w-full box-border text-center" />
                            </td>
                        </tr>
                    </tbody>
                </table>




                {/* Second Table */}
                <div>
                    <h2 className="font-bold text-3xl">Urinalysis</h2>
                    <table className="w-full border-collapse border border-gray-400 table-fixed">
                        <tbody>
                            <tr>
                                <td className="font-semibold border border-gray-400 text-center">Color</td>
                                <td className="border border-gray-400 text-center">
                                    <select name="color" id="color-select">
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="black">Black</option>
                                    </select>
                                </td>

                                <td className="font-semibold border border-gray-400 text-center">Transparency</td>
                                <td className="border border-gray-400 text-center">
                                    <select name="transparency" id="transparency-select">
                                        <option value="opaque">Clear</option>
                                        <option value="semi-transparent">Semi-Transparent</option>
                                        <option value="transparent">Transparent</option>
                                        <option value="translucent">Translucent</option>
                                        <option value="clear">Clear</option>
                                    </select>
                                </td>

                                <td className="font-semibold border border-gray-400 text-center">Albumin</td>
                                <td className="border border-gray-400 text-center">
                                    <select name="glossiness" id="glossiness-select">
                                        <option value="matte">Matte</option>
                                        <option value="semi-gloss">Semi-gloss</option>
                                        <option value="glossy">Glossy</option>
                                        <option value="high-gloss">High-gloss</option>
                                        <option value="ultra-gloss">Ultra-gloss</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold border border-gray-400 text-center">pH</td>
                                <td className="border border-gray-400 text-center">
                                    <input type="text" name="ph" placeholder="Input pH" className='text-center' />
                                </td>

                                <td className="font-semibold border border-gray-400 text-center">Specific Gravity</td>
                                <td className="border border-gray-400 text-center">
                                    <input type="text" name="specificGravity" placeholder="Input Specific Gravity" className='text-center' />
                                </td>

                                <td className="font-semibold border border-gray-400 text-center">Sugar</td>
                                <td className="border border-gray-400 text-center">
                                    <select name="sugar" id="sugar-select">
                                        <option value="none">None</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="very-high">Very High</option>
                                    </select>
                                </td>
                            </tr>


                            {item1Selected && (
                                <tr className="text-center border border-gray-400 m-2">
                                    <td className="px-2"> <X onClick={() => setItem1Selected(false)} /> </td>
                                    <td className="px-2 border border-gray-400 text-center">{"ID:" + subCategoriesObject[0]?.id}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[0]?.name}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[0]?.thirdRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[0]?.fourthRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                </tr>
                            )}

                            {item2Selected && (
                                <tr className="text-center border border-gray-400 m-2">
                                    <td className="px-2"> <X onClick={() => setItem2Selected(false)} /> </td>
                                    <td className="px-2 border border-gray-400 text-center">{"ID:" + subCategoriesObject[1]?.id}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[1]?.name}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[1]?.thirdRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[1]?.fourthRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                </tr>
                            )}

                            {item3Selected && (
                                <tr className="text-center border border-gray-400 m-2">
                                    <td className="px-2"> <X onClick={() => setItem3Selected(false)} /> </td>
                                    <td className="px-2 border border-gray-400 text-center">{"ID:" + subCategoriesObject[2]?.id}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[2]?.name}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[2]?.thirdRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[2]?.fourthRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                </tr>
                            )}

                            {item4Selected && (
                                <tr className="text-center border border-gray-400 m-2">
                                    <td className="px-2"> <X onClick={() => setItem4Selected(false)} /> </td>
                                    <td className="px-2 border border-gray-400 text-center">{"ID:" + subCategoriesObject[3]?.id}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[3]?.name}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[3]?.thirdRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[3]?.fourthRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                </tr>
                            )}

                            {item5Selected && (
                                <tr className="text-center border border-gray-400 m-2">
                                    <td className="px-2"> <X onClick={() => setItem5Selected(false)} /> </td>
                                    <td className="px-2 border border-gray-400 text-center">{"ID:" + subCategoriesObject[4]?.id}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[4]?.name}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[4]?.thirdRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[4]?.fourthRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                </tr>
                            )}

                            {item6Selected && (
                                <tr className="text-center border border-gray-400 m-2">
                                    <td className="px-2"> <X onClick={() => setItem6Selected(false)} /> </td>
                                    <td className="px-2 border border-gray-400 text-center">{"ID:" + subCategoriesObject[5]?.id}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[5]?.name}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[5]?.thirdRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[5]?.fourthRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                </tr>
                            )}

                            {item7Selected && (
                                <tr className="text-center border border-gray-400 m-2">
                                    <td className="px-2"> <X onClick={() => setItem7Selected(false)} /> </td>
                                    <td className="px-2 border border-gray-400 text-center">{"ID:" + subCategoriesObject[6]?.id}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[6]?.name}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[6]?.thirdRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">{subCategoriesObject[6]?.fourthRow}</td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                    <td className="px-2 border border-gray-400 text-center">
                                        <input type="text" placeholder="input" className="mx-auto" />
                                    </td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default LabTable;

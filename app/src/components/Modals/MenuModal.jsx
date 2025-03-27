import React, { useContext, useState } from 'react'
import { createMenuAPI } from '../../services/allApi';
import { MenuContext } from '../../context/MenuContext';

const MenuModal = ({ isMenuOpen, setIsMenuOpen }) => {
    const { setSelectedMenu } = useContext(MenuContext)
    const [item, setItem] = useState({ name: "", description: "" });
    const [loading, setLoading] = useState(false)

    const closeModal = () => {
        setIsMenuOpen(false)
        setItem({ name: "", description: "" })
    };

    // Handle Input Change
    const handleItemChange = (key, value) => {
        setItem((item) => ({ ...item, [key]: value }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (!item.description || !item.name) {
            alert("All Fields are required")
            setLoading(false)
            return
        }
        if (item.name.length < 3) {
            alert("Name must be atleast 3 characters!")
            setLoading(false)
            return
        }
        try {
            const response = await createMenuAPI(item)
            if (response.status == "201") {
                setSelectedMenu(response.data)
                alert("MENU ADDED!")
                setLoading(false)
            } else {
                alert(response.data.message)
                setLoading(false)
                return
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        closeModal();
        setLoading(false)
    };

    return (
        <>
            {/* Modal Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-99 text-white">
                    <div className="bg-[#161616] p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
                        {/* Modal Header */}
                        <div className="flex justify-center items-center mb-4">
                            <h1 className='text-[40px] md:text-[50px] drop-shadow-[4px_2px_0_#800020]'>ADD MENU</h1>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 border-b pb-2 space-y-2">
                                <input
                                    type="text"
                                    placeholder="Menu Name"
                                    className="w-full p-2 border rounded-md mt-1"
                                    value={item.name}
                                    onChange={(e) => handleItemChange("name", e.target.value)}
                                    required
                                />
                                <textarea
                                    placeholder="Description"
                                    className="w-full p-2 border rounded-md mt-1"
                                    value={item.description}
                                    onChange={(e) => handleItemChange("description", e.target.value)}
                                    required
                                />
                            </div>
                            <div className="w-full flex justify-center gap-12">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white text-xl px-3 py-1 shadow-lg flex gap-2 items-center"
                                >
                                    + ADD MENU {loading && <div className="animate-spin"><i className='fa-solid fa-spinner'></i></div>}
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white text-xl px-3 py-1 ">CLOSE</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};


export default MenuModal
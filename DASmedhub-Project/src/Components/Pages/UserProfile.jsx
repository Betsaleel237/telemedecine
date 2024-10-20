import React, { useState } from "react";
import { assets } from "../../../public/assets_frontend/assets.js";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar.jsx";

function UserProfile() {
    const [userData, setUserData] = useState({
        fullName: 'Sanjeev Kumar Das',
        gender: 'male',
        birthDate: '18-05-2001',
        email: 'crisicrush525@gmail.com',
        location: '#D-2, Deepak Spinners Ltd., Baddi, Solan, Himachal Pradesh, India',
        phoneNumber: '+91 7018021841',
        avatar: assets.profile_pic,
    });

    const [isEdit, setIsEdit] = useState(false);

    const handleNameChange = (e) => {
        const [firstName, ...lastNameParts] = e.target.value.split(" ");
        const lastName = lastNameParts.join(" ");
        setUserData((prev) => ({
            ...prev,
            firstName: firstName,
            lastName: lastName,
        }));
    };


    return (
        <>
            <Navbar/>

            <div className="p-6 max-w-2xl mx-auto mt-16 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden mb-4">
                        <img
                            src={userData.avatar}
                            alt="User's Picture"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full">
                        {isEdit ? (
                            <input
                                type="text"
                                value={`${userData.fullName}`}
                                onChange={e => setUserData((prev) => ({
                                    ...prev,
                                    fullName: e.target.value
                                }))}
                                className="border rounded-lg p-2 mb-4 w-full text-2xl font-semibold text-center shadow-md focus:border-teal-500 text-teal-400 bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                            />
                        ) : (
                            <p className="text-2xl font-semibold mb-4 text-center text-teal-400">{`${userData.fullName}`}</p>
                        )}
                    </div>
                </div>

                <hr className="w-full my-4" />

                <div className="w-full">
                    <p className="text-lg font-medium text-gray-700 mb-2">Contact Information</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Email ID:</p>
                            <p className="text-base mb-2 text-teal-600">{userData.email}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Phone:</p>
                            {isEdit ? (
                                <input
                                    type="text"
                                    value={userData.phoneNumber}
                                    onChange={e => setUserData((prev) => ({
                                        ...prev,
                                        phoneNumber: e.target.value
                                    }))}
                                    className="border rounded-lg p-2 w-full mb-2 shadow-md focus:border-teal-500 text-black bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                />
                            ) : (
                                <p className="text-base mb-2">{userData.phoneNumber}</p>
                            )}
                        </div>
                        <div className="sm:col-span-2">
                            <p className="text-sm font-medium text-gray-600">Address:</p>
                            {isEdit ? (
                                <input
                                    type="text"
                                    value={userData.location}
                                    onChange={e => setUserData((prev) => ({
                                        ...prev,
                                        location: e.target.value
                                    }))}
                                    className="border rounded-lg p-2 w-full shadow-md focus:border-teal-500 text-black bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                />
                            ) : (
                                <p className="text-base">{userData.location}</p>
                            )}
                        </div>
                    </div>
                </div>

                <hr className="w-full my-4" />

                <div className="w-full">
                    <p className="text-lg font-medium text-gray-700 mb-2">Basic Information</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Gender:</p>
                            {isEdit ? (
                                <select
                                    value={userData.gender}
                                    onChange={e => setUserData((prev) => ({
                                        ...prev,
                                        gender: e.target.value
                                    }))}
                                    className="border rounded-lg p-2 w-full mb-2 shadow-md focus:border-teal-500 text-black bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            ) : (
                                <p className="text-base mb-2">{userData.gender}</p>
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Date of Birth:</p>
                            {isEdit ? (
                                <input
                                    type="date"
                                    value={userData.birthDate}
                                    onChange={e => setUserData((prev) => ({
                                        ...prev,
                                        birthDate: e.target.value
                                    }))}
                                    className="border rounded-lg p-2 w-full shadow-md focus:border-teal-500 text-black bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                />
                            ) : (
                                <p className="text-base">{userData.birthDate}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <Button
                        onClick={() => setIsEdit(!isEdit)}
                        className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-green-600"
                    >
                        {isEdit ? "Save Information" : "Edit Information"}
                    </Button>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
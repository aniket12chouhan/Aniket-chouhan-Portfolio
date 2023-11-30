import React from 'react'
import Button from '../layouts/Button'

const Form = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor '>
                <form className='md:w-full lg:w-1/2  border-4 p-5'>
                    <div className="space-y-12">

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Please feel free to contact me any time by filling the following details.</p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div className="mt-2">
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="col-span-12">
                                    <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact Details</label>
                                    <div className="mt-2">
                                        <input id="contact" name="contact" type="number" autoComplete="contact" className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6" />
                                    </div>
                                </div>



                                <div className="col-span-12">
                                    <label htmlFor="textarea" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                    <div className="mt-2">
                                        <textarea id="textarea" name="text" type="text" autoComplete="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6" />
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button type="button" title="Send Message" />
                    </div>
                </form>
            </div>


        </>
    )
}

export default Form
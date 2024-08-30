import React from 'react'

const InputData = ({ openDialog, setOpenDialog }) => {

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog className="modal" open={openDialog}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Task</h3>
                    <hr />
                    <form className='flex flex-col gap-3 my-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-bold">Title</span>
                            </div>
                            <input type="text" placeholder="Enter Title" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-bold">Description</span>
                            </div>
                            <textarea className="textarea textarea-bordered" placeholder="Enter Description"></textarea>                        </label>
                        <div className='flex justify-end mt-5 items-center gap-4'>
                            <button onClick={() => setOpenDialog(false)} className="btn btn-error btn-sm rounded-full">Close</button>
                            <button className="btn btn-success btn-sm rounded-full" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default InputData
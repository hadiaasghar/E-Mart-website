import React, { useState } from 'react';
import { Modal} from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';

const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
    handleClose();
  };

  return (
    <div>
      <button className='w-full flex items-center ' onClick={handleOpen}>
        <span>Change Password</span>
        <FaArrowRight className="ml-2" />
      </button>
      <Modal open={open} onClose={handleClose}>
        <div
          // component="form"
          onSubmit={handleSubmit}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-1/3 flex flex-col gap-4 rounded shadow-primary-400 shadow-sm'
        >
          <h1 className='text-2xl'>
            Change Password
          </h1>
          <div className='flex flex-col gap-4'>
          <input
          className="w-full p-2 border border-primary-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primary-400"
            // label="Current Password"
            placeholder='Current Password'
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            // label="New Password"
            className="w-full p-2 border border-primary-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primary-400"
            type="password"
            placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            // label="Confirm New Password"
            className="w-full p-2 border border-primary-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primary-400"
            type="password"
            placeholder='Confirm New Password'
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          </div>
          <div className='flex justify-between'>
            <button className='bg-primary-900 hover:bg-primary-800 rounded p-2' type="submit">
              Submit
            </button>
            <button className= "bg-primary-100 hover:bg-primary-800 rounded p-2" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChangePassword;
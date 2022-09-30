import React from 'react'

import Popover from '@mui/material/Popover';

const Profile = (props) => {
    return (
        <Popover
            id='popover-profile'
            open={props.isPopoverProfileOpen}
            onClose={props.setIsPopoverProfileOpen(false)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            Iasmin
        </Popover>
    )
}

export default Profile
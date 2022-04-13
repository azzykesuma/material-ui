import './Layout.css';
import { Drawer,Typography } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <div className='root'>

            {/* drawer */}
            <Drawer
            className='drawer'
            variant='permanent'
            anchor='left'
            classes={{
                paper : 'drawerPaper'
            }}
            >
                <Typography variant="h5">
                    Notes Ninja
                </Typography>
            </Drawer>
            <div className="page">
                { children }
            </div>
        </div>
    );
}
 
export default Layout;
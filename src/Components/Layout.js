import './Layout.css';
import { makeStyles } from '@mui/styles';
import { useHistory,useLocation } from 'react-router-dom';
import { Drawer,Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SubjectOutlined, AddCircleOutlined } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    active : {
        background : '#f4f4f4'
    }
})

const Layout = ({ children }) => {

    const classes = useStyles();

    const menuItems = [
        {
            text : 'My Note',
            icon : <SubjectOutlined color="secondary" />,
            path : '/'
        },
        {
            text : 'Add Note',
            icon : <AddCircleOutlined color="secondary" />,
            path : '/create'
        },
    ];

    const history = useHistory();
    const location = useLocation();

    return (
        <div className='root'>

            <AppBar className='appbar' elevation={0}>
                <Toolbar>
                    <Typography className='textTitle'>
                    today is the { format(new Date(), 'do MMMM y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar
                    src="/img.jpg"
                    className="avatar"
                    />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Drawer
            className='drawer'
            variant='permanent'
            anchor='left'
            classes={{
                paper : 'drawerPaper'
            }}
            >
                <Typography variant="h5" className='title'>
                    Notes Ninja
                </Typography>

                {/* list/links */}
                {
                    menuItems.map(item => (
                        <List>
                            <ListItem 
                            key={item.text} 
                            button
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </List>
                    ))
                }
            </Drawer>
            <div className="page">
                <div className="margin"></div>
                { children }
            </div>
        </div>
    );
}
 
export default Layout;
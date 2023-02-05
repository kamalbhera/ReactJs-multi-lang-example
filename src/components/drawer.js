import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {BsPeopleFill} from "react-icons/bs" 
import {MdDateRange} from "react-icons/md" 
import {RiLogoutBoxRLine} from "react-icons/ri" 
//-------------------
import {FaAngleRight} from "react-icons/fa" 
import Translate from 'react-translate-component'
import counterpart from "counterpart"
const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState(
    {
        left: false,
        right: false,
      });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    if(counterpart.getLocale()==='en')
      {
        anchor='right';
        setLangopen('right')
      }
     else
      {
       anchor='left';
       setLangopen('left')
      }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
    className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className="row m-3" >
            <FaAngleRight className="text-center mt-3"/>
            <img src="/images/account.png" width="50" height="50" alt="account" className="text-center"/>
            <Translate className="text-center mt-3 font-weight-bold" content="contentadmission" component="div"/>                               
        </div>
      <Divider />
      <div className="container MyTab ">
            <div className="row">
                <BsPeopleFill className="m-3 MyTab"/>
                <Translate className="text-center m-2 MyTab" content="contentApplications" component="div"/>
            </div>
            <div className="row">
                <MdDateRange className="m-3"/>
                <Translate className="text-center m-2" content="contentDates" component="div"/>
            </div>
            <div className="row"> 
                <RiLogoutBoxRLine className="m-3"/>
                <Translate className="text-center m-2" content="contentSignOut" component="div"/>
            </div>
      </div>
    </div>
  );
const [Langopen, setLangopen] = React.useState('right');
  return (
    <div>
      <Button onClick={toggleDrawer(Langopen, true)}>
        <img src="/images/account.png" width="50" height="50" alt="account"/>
      </Button>
      <Drawer anchor={Langopen} open={state[Langopen]} onClose={toggleDrawer(Langopen, false)}>
        {list(Langopen)}
      </Drawer>
    </div>
  );
}

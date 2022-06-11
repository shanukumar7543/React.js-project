import react from "react";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';
// import InfoIcon from '@mui/icons-material/Info';

export const SidebarData = [
    {
      title: "Home",
      //  < icon: <HomeIcon />,
      link: "/home" 
    },
    {
        title: "Uses",
        //  icon: <MailIcon />,
        link: "/uses" 
      },
      {
        title: "Post",
        //  icon: <CallIcon />,
        link: "/post" 
      },
      {
        title: "Photos",
        //  icon: <SettingsIcon />,
        link: "/photo" 
      },
      {
        title: "Album",
        //  icon: <InfoIcon />,
        link: "/album" 
      },
      {
        title: "Comments.",
        //  icon: <InfoIcon />,
        link: "/comments" 
      },
      {
        title: "About Us.",
        //  icon: <InfoIcon />,
        link: "/about" 
      },
      {
        title: "Contact.Us",
        //  icon: <InfoIcon />,
        link: "/contact" 
      },
      {
        title: "Settings",
        //  icon: <InfoIcon />,
        link: "/settings" 
      },
      {
        title: "Logout",
          // icon: <InfoIcon />,
        link: "logout" 
      }
    ]

    export default SidebarData;
 


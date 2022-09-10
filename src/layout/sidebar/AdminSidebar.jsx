import styles from "./sidebar.module.css";
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import { Link } from "react-router-dom";

const adminNavs = [
  {
    logo: <CameraOutdoorIcon className="mr-5 " />,
    text: "Dashboard",
    link: "admin/dashboard",
  },
  {
    logo: <CameraOutdoorIcon className="mr-5" />,
    text: "User Controle",
    link: "admin/dashboard/user-control",
  },
  {
    logo: <CameraOutdoorIcon className="mr-5" />,
    text: "Value Generator",
    link: "admin/dashboard/value-generator",
  },
  {
    logo: <CameraOutdoorIcon className="mr-5" />,
    text: "Value Seeker",
    link: "/admin/dashboard/value-seeker",
  },
  {
    logo: <CameraOutdoorIcon className="mr-5" />,
    text: "Job Aprovals",
    link: "/admin/dashboard/job-aprovals",
  },
  {
    logo: <CameraOutdoorIcon className="mr-5" />,
    text: "Payment",
    link: "/admin/dashboard/payments",
  },
  {
    logo: <CameraOutdoorIcon className="mr-5" />,
    text: "Reports",
    link: "/admin/dashboard/reports",
  },
  {
    logo: <CameraOutdoorIcon className="mr-5" />,
    text: "Settings",
    link: "/admin/dashboard/settings",
  },
];

const AdminSidebar = () => {
  return (
    <div className={styles.dashboard__sidebarLeft}>
      {/* navs */}
      <div className={styles.dashboard_navwrapper}>
        {adminNavs.map((nav, i) => (
          <div className={styles.dashboard_navitem} key={i}>
            {nav.logo} <Link href={nav.link}>{nav.text}</Link>
          </div>
        ))}
      </div>
      {/* bottom */}
      <div className={styles.dashboard__sidebarLeftBottom}>
        <div className={styles.dashboard__sidebarLeft_logout}>
          {/* <ExitToAppIcon className="mr-5" /> */}
          <Link href="/admin/login">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

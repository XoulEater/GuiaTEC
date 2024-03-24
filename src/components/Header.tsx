import { Avatar, Dropdown, Navbar } from "flowbite-react";

interface Props {
  userType: "asistente" | "profesor";
  currentRoute: "equipo" | "estudiantes" | "profesores";
}

const Header: React.FC<Props> = ({ currentRoute }) => {
  const userType = localStorage.getItem("userType");

  return (
    <Navbar fluid rounded className="bg-slate-50">
      <Navbar.Brand>
        <img
          src="/favicon copy.svg"
          className="mr-2 h-14 "
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white ">
          GuíaTEC
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              className="h-16"
              alt="User settings"
              img="/userDefault.png"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item
            className={userType == "asistente" ? "grid" : "hidden"}
          >
            Registrar profesor
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/">Salir</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/team"
          className={
            currentRoute == "equipo" ? "text-lg text-primary-light" : "text-lg"
          }
        >
          Equipo
        </Navbar.Link>
        <Navbar.Link
          href="/students"
          className={
            currentRoute == "estudiantes"
              ? "text-lg text-primary-light"
              : "text-lg"
          }
        >
          Estudiantes
        </Navbar.Link>
        <Navbar.Link
          href="/teachers"
          className={
            currentRoute == "profesores"
              ? "text-lg text-primary-light"
              : "text-lg"
          }
        >
          Profesores
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

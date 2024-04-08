import { Avatar, Dropdown, Navbar } from "flowbite-react";
import type { UserDTO } from "../lib/data";
import { NavBarTheme } from "../lib/themes";

interface Props {
  currentRoute: "equipo" | "estudiantes" | "profesores";
}

const Header: React.FC<Props> = ({ currentRoute }) => {
  const user = localStorage.getItem("user");
  const userDTO = JSON.parse(user as string) as UserDTO;

  function handleLogout() {
    console.log("Logging out...");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <Navbar fluid rounded className="bg-slate-50" theme={NavBarTheme}>
      <Navbar.Brand>
        <img
          src="/favicon copy.svg"
          className="mr-2 h-20"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white ">
          GuíaTEC
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="/userDefault.png" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{userDTO.name}</span>
            <span className="block truncate text-sm font-medium">
              {userDTO.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item
            className={userDTO.userType == "assistant" ? "grid" : "hidden"}
            href="/register"
            target="_blank"
          >
            Registrar profesor
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Salir</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/team" active={currentRoute === "equipo"}>
          Equipo
        </Navbar.Link>
        <Navbar.Link href="/students" active={currentRoute === "estudiantes"}>
          Estudiantes
        </Navbar.Link>
        <Navbar.Link href="/teachers" active={currentRoute === "profesores"}>
          Profesores
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

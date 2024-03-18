
import { Avatar, Dropdown, Navbar } from 'flowbite-react';


interface Props {
    userType: "asistente" | "profesor";
}


const Header: React.FC<Props> = ({ userType }) => {
    return (
        <Navbar fluid rounded className='bg-slate-50' >
            <Navbar.Brand >
                <img src="/favicon copy.svg" className="mr-3 h-6 sm:h-14 " alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">GuíaTEC</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="/userDefault.png" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item className={userType == "asistente" ? "grid" : "hidden"}>Crear profesor</Dropdown.Item>
                    <Dropdown.Item className={userType == "asistente" ? "grid" : "hidden"}>Crear Equipo</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Salir</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Equipos
                </Navbar.Link>
                <Navbar.Link href="#">Estudiantes</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

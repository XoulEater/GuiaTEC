import React, { useEffect, useState } from "react";
import type { Teacher } from "../lib/data";
import { teachers } from "../lib/data";

interface Props {
  teacherID: string;
}

const TeacherCard: React.FC<Props> = ({ teacherID }) => {
  const teacher = teachers.find(
    (teacher: Teacher) => teacher.code === teacherID
  );

  const [editing, setEditing] = useState(false);

  // handle editing
  function handleSave() {
    setEditing(!editing);
    if (editing) {
      if (teacher) {
        let email = (document.getElementById("email") as HTMLInputElement)
          .value;
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let officePNumber = (
          document.getElementById("officePNumber") as HTMLInputElement
        ).value;
        let personalPNumber = (
          document.getElementById("personalPNumber") as HTMLInputElement
        ).value;
        console.log(email, name, officePNumber, personalPNumber);
      }
    }
  }

  return (
    <article className=" overflow-y-scroll lgn:overflow-hidden h-screen lgn:h-[80%] w-[90%] lgn:w-[75%] bg-slate-200 rounded-3xl p-5 flex flex-col lgn:flex-row   lgn:place-content-center items-center align-top gap-5 shadow-lg">
      <img
        className="rounded-full h-[200px] aspect-square object-cover object-center"
        src={teacher?.photo}
        alt={teacher?.name}
      />
      <aside className=" w-[90%] lgn:w-[60%] gap-5 flex flex-col items-center lgn:items-start ">
        <header className="border-b-2 w-full border-zinc-400 flex flex-col lgn:flex-row gap-5 lgn:justify-between  items-center lgn:items-top pb-3 ">
          <div className="flex flex-col items-center lgn:items-start order-2 lgn:order-1">
            {editing ? (
              <input
                type="text"
                className="border-none text-xl"
                id="name"
                defaultValue={teacher?.name}
              />
            ) : (
              <h1 className="text-xl font-medium truncate">{teacher?.name}</h1>
            )}

            <h2 className="text-zinc-400 text-sm">{teacher?.code}</h2>
          </div>
          <div className="flex gap-3 order-1">
            <button
              onClick={handleSave}
              className="bg-primary-dark text-white w-32 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300 ease-in-out">
                {editing ? "Guardar" : "Editar"}
              </span>
            </button>
            <button className="bg-red-800 text-white w-32 h-12 rounded-md flex gap-2 items-center justify-center hover:brightness-125 transition duration-300 ease-in-out group">
              <span className="group-hover:scale-110 transition-transform duration-300 ease-in-out">
                Eliminar
              </span>
            </button>
          </div>
        </header>
        <footer className="lgn:w-[80%] grid grid-cols-1 lgn:grid-cols-2 gap-x-3 gap-y-2 place-items-center lgn:place-items-start">
          <h3 className="text-zinc-400">Correo</h3>
          {editing ? (
            <input
              type="text"
              className=" border-none"
              id="email"
              defaultValue={teacher?.email}
            />
          ) : (
            <p className=" p-2 ml-1">{teacher?.email}</p>
          )}

          <h3 className="text-zinc-400">Telefono Oficina</h3>
          {editing ? (
            <input
              type="tel"
              className=" border-none"
              id="officePNumber"
              defaultValue={teacher?.officePNumber}
            />
          ) : (
            <p className=" p-2 ml-1">{teacher?.officePNumber}</p>
          )}

          <h3 className="text-zinc-400">Telefono Celular</h3>
          {editing ? (
            <input
              type="tel"
              className="border-none"
              id="personalPNumber"
              defaultValue={teacher?.personalPNumber}
            />
          ) : (
            <p className=" p-2 ml-1">{teacher?.personalPNumber}</p>
          )}
        </footer>
      </aside>
    </article>
  );
};

export default TeacherCard;

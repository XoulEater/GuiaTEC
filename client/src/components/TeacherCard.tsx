import React, { useState } from "react";
import type { TeacherDTO } from "../lib/data";
import { teachers } from "../lib/data";

interface Props {
  teacherID: string;
}

const TeacherCard: React.FC<Props> = ({ teacherID }) => {
  const teacher = teachers.find(
    (teacher: TeacherDTO) => teacher.code === teacherID
  );

  const [editing, setEditing] = useState(false);

  const user = localStorage.getItem("user");

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
        // TODO: update teacher
        teacher.email = email;
        teacher.name = name;
        teacher.officePNumber = officePNumber;
        teacher.personalPNumber = personalPNumber;
      }
    }
  }

  const [confirmDelete, setConfirmDelete] = useState(false);

  // handle delete
  function handleDelete() {
    setConfirmDelete(true);
  }

  function handleConfirmDelete() {
    // delete teacher
    setConfirmDelete(false);
    if (typeof window !== "undefined") {
      window.history.back();
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
                className="border-none pl-0 mr-1 py-2 text-xl"
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
            <button
              onClick={handleDelete}
              className="bg-red-800 text-white w-32 h-12 rounded-md flex gap-2 items-center justify-center hover:brightness-125 transition duration-300 ease-in-out group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300 ease-in-out">
                Eliminar
              </span>
            </button>
          </div>
        </header>
        <footer className="lgn:w-[80%] grid grid-cols-1 lgn:grid-cols-2 gap-x-3  gap-y-1 lgn:gap-y-2 place-items-center lgn:place-items-start">
          <h3 className="text-zinc-400">Correo</h3>
          {editing ? (
            <input
              type="text"
              className=" border-none pl-0 mr-1 py-2"
              id="email"
              defaultValue={teacher?.email}
            />
          ) : (
            <p className="py-2">{teacher?.email}</p>
          )}

          <h3 className="text-zinc-400">Telefono Oficina</h3>
          {editing ? (
            <input
              type="tel"
              className=" border-none pl-0 mr-1 py-2"
              id="officePNumber"
              defaultValue={teacher?.officePNumber}
            />
          ) : (
            <p className="py-2">{teacher?.officePNumber}</p>
          )}

          <h3 className="text-zinc-400">Telefono Celular</h3>
          {editing ? (
            <input
              type="tel"
              className="border-none pl-0 mr-1 py-2"
              id="personalPNumber"
              defaultValue={teacher?.personalPNumber}
            />
          ) : (
            <p className="py-2">{teacher?.personalPNumber}</p>
          )}
        </footer>
      </aside>
      {/* confirm pop up */}
      {confirmDelete && (
        <div
          className={
            "absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50"
          }
        >
          <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl font-medium">¿Está seguro?</h2>
            <div className="flex gap-5">
              <button
                onClick={handleConfirmDelete}
                className="bg-primary-dark text-white w-32 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  Si
                </span>
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="bg-red-800 text-white w-32 h-12 rounded-md flex gap-2 items-center justify-center hover:brightness-125 transition duration-300 ease-in-out group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  No
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default TeacherCard;

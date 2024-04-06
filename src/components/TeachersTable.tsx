import type { TeacherDTO, TeamDTO } from "../lib/data.ts";
import { teams, teachers } from "../lib/data.ts";
import { useState } from "react";

const MembersTable = () => {
  const [teamTeachers, setTeamTeachers] = useState(teams.members);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherDTO | null>(
    null
  );

  // handle delete
  function handleDelete(teacher: TeacherDTO) {
    setSelectedTeacher(teacher);
    setConfirmDelete(true);
  }

  function handleConfirmDelete() {
    if (selectedTeacher) {
      teachers.splice(teachers.indexOf(selectedTeacher), 1);
    }
    setConfirmDelete(false);
  }

  function handleIncludeTeacher(teacher: TeacherDTO) {
    setTeamTeachers((prevTeachers) => [...prevTeachers, teacher]);
    // TODO: Implement update team members
  }

  return (
    <section className="w-[90%] overflow-hidden rounded-xl drop-shadow-md shadow-inner border border-black/10 shadow-white/10">
      <header className="grid grid-cols-8 h-16 w-full items-center bg-zinc-200 px-2">
        <span className="font-semibold text-lg">Codigo</span>
        <span className="font-semibold text-lg">Imagen</span>
        <span className="font-semibold text-lg col-span-2">Nombre</span>
        <span className="font-semibold text-lg col-span-2">Teléfono</span>
        <span className="font-semibold text-lg col-span-2">Acciones</span>
      </header>
      {teachers.map((teacher: TeacherDTO, index) => {
        const rowColorClass = index % 2 === 0 ? "bg-white" : "bg-zinc-200";

        return (
          <div
            key={index}
            className={`grid grid-cols-8 h-16 w-full items-center ${rowColorClass} px-2`}
          >
            <span>{teacher.code}</span>
            <img
              className="rounded-full h-12 aspect-square object-cover object-center"
              src={teacher.photo}
              alt={teacher.name}
            />
            <span className=" col-span-2">{teacher.name}</span>
            <span className=" col-span-2">{teacher.personalPNumber}</span>
            <div className="flex col-span-2 gap-4  items-center">
              <a href={`teacher/${teacher.code}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" text-primary-light hover:brightness-150 hover:scale-110 transition-all  duration-300 ease-out"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </a>
              <button onClick={() => handleDelete(teacher)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" text-red-600 hover:brightness-150 hover:scale-110 transition-all  duration-300 ease-out"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 7l16 0"></path>
                  <path d="M10 11l0 6"></path>
                  <path d="M14 11l0 6"></path>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </button>
              {teacher !==
                teamTeachers.find(
                  (teamTeacher) => teamTeacher.code === teacher.code
                ) && (
                <button onClick={() => handleIncludeTeacher(teacher)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" text-lime-600 hover:brightness-125 hover:scale-110 transition-all  duration-300 ease-out"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                    <path d="M19 22v-6" />
                    <path d="M22 19l-3 -3l-3 3" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        );
      })}
      {confirmDelete && (
        <div
          className={
            "absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50"
          }
        >
          <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl font-medium ">{`Está seguro de eliminar a ${selectedTeacher?.name}?`}</h2>
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
    </section>
  );
};

export default MembersTable;

import type { StudentDTO } from "../lib/data.ts";
import { students } from "../lib/data.ts";
import { useState } from "react";

const StudentTable = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentDTO | null>(
    null
  );
  const [editStudent, setEditStudent] = useState<StudentDTO | null>(null);
  const [listStudents, setStudents] = useState(students);

  // handle delete student
  function handleDelete(student: StudentDTO) {
    setSelectedStudent(student);
    setConfirmDelete(true);
  }

  // handle confirm delete student
  function handleConfirmDelete() {
    if (selectedStudent) {
      listStudents.splice(listStudents.indexOf(selectedStudent), 1);
    }
    setConfirmDelete(false);
  }

  // handle edit student
  function handleEdit(student: StudentDTO) {
    setEditStudent(student);
  }

  // handle save student
  function handleSave() {
    const updatedStudents = listStudents.map((student) => {
      if (student.carnet === editStudent?.carnet) {
        return {
          ...student,
          name: editStudent.name,
          email: editStudent.email,
          personalPNumber: editStudent.personalPNumber,
        };
      }
      return student;
    });
    setStudents(updatedStudents);
    setEditStudent(null);
  }

  return (
    <div>
      <button className=" ml-20 mb-2 bg-primary-dark text-white w-40 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 9l4 -4l4 4m-4 -4v14" />
          <path d="M21 15l-4 4l-4 -4m4 4v-14" />
        </svg>
        Ordenar
      </button>
      <div className="grid place-items-center">
        <section className="w-[90%] overflow-hidden rounded-xl drop-shadow-md shadow-inner border border-black/10 shadow-white/10 ">
          <header className="grid grid-cols-5 h-16 w-full items-center bg-zinc-200 px-2">
            <span className="font-semibold text-lg">Carne</span>
            <span className="font-semibold text-lg">Nombre</span>
            <span className="font-semibold text-lg ">Correo</span>
            <span className="font-semibold text-lg ">Teléfono</span>
            <span className="font-semibold text-lg ">Acciones</span>
          </header>
          {listStudents.map((student: StudentDTO, index) => {
            const rowColorClass = index % 2 === 0 ? "bg-white" : "bg-zinc-200";

            return (
              <div
                key={index}
                className={`grid grid-cols-5 h-16 w-full items-center ${rowColorClass} px-2`}
              >
                <span>{student.carnet}</span>
                {/* Editable */}
                {editStudent?.carnet === student.carnet ? (
                  <input
                    type="text"
                    className=" pl-0 mr-1"
                    value={editStudent.name}
                    onChange={(e) =>
                      setEditStudent({ ...editStudent, name: e.target.value })
                    }
                  />
                ) : (
                  <span>{student.name}</span>
                )}
                {/* Editable */}
                {editStudent?.carnet === student.carnet ? (
                  <input
                    type="text"
                    className="pl-0 mr-1"
                    value={editStudent.email}
                    onChange={(e) =>
                      setEditStudent({ ...editStudent, email: e.target.value })
                    }
                  />
                ) : (
                  <span>{student.email}</span>
                )}
                {/* Editable */}
                {editStudent?.carnet === student.carnet ? (
                  <input
                    type="text"
                    className=" pl-0 mr-1"
                    value={editStudent.personalPNumber}
                    onChange={(e) =>
                      setEditStudent({
                        ...editStudent,
                        personalPNumber: e.target.value,
                      })
                    }
                  />
                ) : (
                  <span>{student.personalPNumber}</span>
                )}

                {/* Editable */}
                <div className="flex gap-2 items-center">
                  {editStudent?.carnet === student.carnet ? (
                    <button onClick={handleSave}>
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(student)}>
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                        <path d="M16 5l3 3" />
                      </svg>
                    </button>
                  )}

                  <button onClick={() => handleDelete(student)}>
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
                <h2 className="text-xl font-medium ">{`Está seguro de eliminar a ${selectedStudent?.name}?`}</h2>
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
      </div>
    </div>
  );
};

export default StudentTable;

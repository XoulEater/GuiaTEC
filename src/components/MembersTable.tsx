import type { Teacher } from "../lib/data.ts";
import { teachers } from "../lib/data.ts";

const MembersTable = () => {
  return (
    <div className="w-[90%] overflow-hidden rounded-xl drop-shadow-md shadow-inner border border-black/10 shadow-white/10">
      <div className="grid grid-cols-6 h-16 w-full items-center bg-zinc-200 px-2">
        <span className="font-semibold text-lg">Codigo</span>
        <span className="font-semibold text-lg">Imagen</span>
        <span className="font-semibold text-lg col-span-2">Nombre</span>
        <span className="font-semibold text-lg col-span-2">Acciones</span>
      </div>
      {teachers.map((teacher: Teacher, index) => {
        const rowColorClass = index % 2 === 0 ? "bg-white" : "bg-zinc-200";

        return (
          <div
            className={`grid grid-cols-6 h-16 w-full items-center ${rowColorClass} px-2`}
          >
            <span>{teacher.code}</span>
            <img
              className="rounded-full h-12 aspect-square object-cover object-center"
              src={teacher.photo}
              alt={teacher.name}
            />
            <span className=" col-span-2">{teacher.name}</span>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" text-red-600 hover:brightness-150 hover:scale-110 transition-all  duration-300 ease-out"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 12v.01"></path>
                  <path d="M3 21h18"></path>
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5"></path>
                  <path d="M14 7h7m-3 -3l3 3l-3 3"></path>
                </svg>
              </a>
              {teacher.isLeader ? (
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-amber-500 hover:brightness-125 hover:scale-110 transition-all  duration-300 ease-out"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                  </svg>
                </a>
              ) : (
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-zinc-400 hover:brightness-90 hover:scale-110 transition-all  duration-300 ease-out"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MembersTable;

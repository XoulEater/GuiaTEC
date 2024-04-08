import React, { useState } from "react";
import type { WorkPlanDTO, ActivityDTO } from "../lib/data";
import ActivitesAccordion from "./ActivitiesAccordion";
import { a } from "../../dist/_astro/index.DdRMN4IK";

interface WorkPlanProps {
  workplanDTO?: WorkPlanDTO;
}

const WorkPlan: React.FC<WorkPlanProps> = ({ workplanDTO }) => {
  const workplan = workplanDTO;
  const activities = workplan?.activities;
  // clasify activities by week
  const activitiesByWeek: {
    [week: number]: ActivityDTO[];
  } = {};
  activities?.forEach((activity) => {
    if (activitiesByWeek[activity.week]) {
      activitiesByWeek[activity.week].push(activity);
    } else {
      activitiesByWeek[activity.week] = [activity];
    }
  });
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<ActivityDTO | null>(
    null
  );

  function handleAccordionToggle(week: number) {
    if (openAccordions.includes(week)) {
      setOpenAccordions(openAccordions.filter((w) => w !== week));
    } else {
      setOpenAccordions([...openAccordions, week]);
    }
  }

  return (
    <article>
      <header className="flex justify-between mx-20 my-6">
        <div>
          <h1 className="text-3xl font-bold">{workplan?.name}</h1>
          <p>{workplan?.description}</p>
        </div>
        <aside>
          <button className="bg-primary-dark text-white w-44 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
            Nueva Actividad
          </button>
        </aside>
      </header>
      {/* Activities */}
      <div className="flex mx-20 gap-10">
        {ActivitesAccordion(
          activitiesByWeek,
          handleAccordionToggle,
          openAccordions,
          setSelectedActivity
        )}
        {/* Activity Details */}
        <aside className="my-6 w-8/12 h-[560px] rounded-lg overflow-y-scroll no-scrollbar shadow-md ">
          {selectedActivity && (
            <div className="p-4 bg-white rounded-lg h-full flex flex-col gap-2">
              <header>
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">
                    {selectedActivity.name}
                  </h2>

                  <span className="border-2 py-1 px-2 rounded-full border-primary-light text-primary-light text-lg">
                    {selectedActivity.type}
                  </span>
                </div>
                <p className="text-xl text-gray-600 -mt-2">
                  {selectedActivity.date.toDateString()} -{" "}
                  {selectedActivity.time}
                </p>
              </header>

              <section className="flex justify-between">
                <div>
                  <p className=" text-xl  font-bold">Responsables:</p>
                  <ul>
                    {selectedActivity.responsibles.map((teacher) => (
                      <li key={teacher.name} className=" text-lg">
                        - {teacher.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className=" my-2 shadow-sm flex gap-4  place-items-center px-3 text-gray-400 text-lg rounded-md border-2 border-black/10">
                  Archivo <br /> adjunto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" "
                    width="46"
                    height="46"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <path d="M12 17v-6"></path>
                    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
                  </svg>
                </button>
              </section>
              <section>
                <p className="text-xl font-bold">Descripción:</p>
                <p className=" text-lg">{selectedActivity.modality}</p>
                {selectedActivity.link && (
                  <a
                    href={selectedActivity.link}
                    className="text-primary-light text-lg hover:underline"
                  >
                    Enlace
                  </a>
                )}
              </section>
              <footer className="flex justify-center gap-3">
                <button className="bg-primary-dark text-white w-44 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
                  Publicar
                </button>
                <button className="bg-primary-dark text-white w-44 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
                  Editar
                </button>
                <button className="bg-primary-dark text-white w-44 h-12 rounded-md flex gap-2 items-center justify-center hover:bg-primary-light transition duration-300 ease-in-out group">
                  Cancelar
                </button>
              </footer>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
};

export default WorkPlan;

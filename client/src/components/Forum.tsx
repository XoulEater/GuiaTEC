interface MessageDTO {
  id?: string; // unique identifier of the message
  user: string; // user that sent the message
  date: Date; // date of the message
  content: string; // content of the message
  replies: Array<MessageDTO>; // replies list of the message
}

interface Props {
  // Define the props for your component here
}

const Forum: React.FC<Props> = () => {
  const msg: MessageDTO[] = [
    {
      id: "1",
      user: "user",
      date: new Date(),
      content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
      replies: [
        {
          user: "user",
          date: new Date(),
          content:
            "orem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
          replies: [],
        },
      ],
    },
    {
      id: "2",
      user: "user",
      date: new Date(),
      content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
      replies: [
        {
          user: "user",
          date: new Date(),
          content:
            "orem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className=" w-full ">
      <div className="flex relative">
        <input
          className=" w-full border-gray-400  rounded-lg pr-24"
          type="text"
          placeholder="Añade un comentario"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-e-md absolute right-0 h-full grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-send-2"
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
            <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
            <path d="M6.5 12h14.5" />
          </svg>
        </button>
      </div>

      <div className=" mr-4 flex gap-2 flex-col">
        {
          // map comments
          msg.map((m) => (
            <article
              key={m.id}
              className="comment mx-2 flex w-full  p-2 flex-col gap-2"
            >
              <div className=" flex gap-4 ">
                <img
                  className="object-cover object-center h-12 rounded-full aspect-square border-2 border-white/50 shadow-sm"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                />

                <aside className=" flex flex-col w-full">
                  <header className="flex justify-between border-b-2 border-gray-300">
                    <section className="flex gap-6">
                      <h2 className=" font-bold">{m.user}</h2>
                      <h3>{m.date.toDateString()}</h3>
                    </section>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-send-2 text-gray-500"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 14l-4 -4l4 -4" />
                      <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                    </svg>
                  </header>
                  <p>{m.content}</p>
                </aside>
              </div>
              <footer className=" gap-2">
                {m.replies.map((r) => (
                  <article
                    key={r.date.toISOString()}
                    className="comment mx-2 flex w-full gap-4 p-2"
                  >
                    <img
                      className="object-cover object-center h-12 rounded-full aspect-square border-2 border-white/50 shadow-sm"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    />
                    <aside className=" flex flex-col w-full">
                      <header className="flex justify-between border-b-2 border-gray-300">
                        <section className="flex gap-6">
                          <h2 className=" font-bold">{r.user}</h2>
                          <h3>{r.date.toDateString()}</h3>
                        </section>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-send-2 text-gray-500"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 14l-4 -4l4 -4" />
                          <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                        </svg>
                      </header>
                      <p>{r.content}</p>
                    </aside>
                  </article>
                ))}
              </footer>
            </article>
          ))
        }
      </div>
    </div>
  );
};

export default Forum;

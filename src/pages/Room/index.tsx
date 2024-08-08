import { ArrowRight, Share2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { Logotipo } from "../../components/Logotipo";

export function Room() {
  const { roomId } = useParams();

  return (
    <body className="h-screen flex flex-col items-center mt-6 mx-0">
      <div className="max-w-[580px] min-w-[580px] flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between gap-36 w-full">
          <div className="flex flex-row items-center gap-2">
            <Logotipo className="w-20 h-20" />
            <p className="text-center text-sm font-normal leading-normal text-ellipsis text-zinc-500">
              Código da sala:{" "}
              <span className="text-ellipsis text-sm font-normal leading-normal text-zinc-300">
                {roomId}
              </span>
            </p>
          </div>
          <button className="bg-zinc-800 flex justify-center items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-700">
            Compartilhar <Share2 size={16} />
          </button>
        </div>

        <hr className="border border-zinc-900" />

        <div className="flex p-2 justify-between items-center rounded-xl border gap-2 border-zinc-800 bg-zinc-900 min-w-[520px]">
          <input
            className="w-full h-full placeholder:text-zinc-500 text-sm font-normal bg-transparent flex-1"
            placeholder="Qual a sua pergunta?"
          />
          <button className="bg-green-600 text-zinc-900 hover:bg-green-500 text-sm font-medium px-4 py-2 rounded-lg flex flex-row gap-1 items-center">
            Criar pergunta <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </body>
  );
}

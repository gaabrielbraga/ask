import { ArrowRight } from 'lucide-react';
import { customAlphabet } from 'nanoid';

function App() {
  const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

  const generateRoom = () => {
    const roomId = nanoid();
    window.location.href = `/room/${roomId}`;
  };

  return (
    <main className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <img
          src='../public/ask.me-logotipo.png'
          alt='logotipo do ask.me'
          width={180}
          height={180}
        />
        <p className='text-center text-base font-normal leading-6 text-zinc-300 max-w-[450px]'>
          Crie uma sala pública do ask.me e responda as perguntas mais
          importantes.
        </p>
        <div className='flex min-w-[450px] p-2 justify-between items-center rounded-xl border gap-2 border-zinc-800 bg-zinc-900'>
          <input
            className='w-full h-full placeholder:text-zinc-500 text-sm font-normal bg-transparent flex-1'
            placeholder='Nome da sala'
          />
          <button
            onClick={generateRoom}
            className='bg-green-600 text-zinc-900 hover:bg-green-500 text-sm font-medium px-4 py-2 rounded-lg flex flex-row gap-1 items-center'
          >
            Criar sala <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

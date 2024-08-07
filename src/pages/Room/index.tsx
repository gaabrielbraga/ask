import { Share2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

export function Room() {
  const { roomId } = useParams();

  return (
    <main className='h-screen flex items-center justify-center '>
      <div className='flex flex-row items-center justify-center gap-36'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <img
            src='../public/ask.me-logotipo.png'
            alt='logotipo do ask.me'
            width={80}
            height={80}
          />
          <p className='text-center text-sm font-normal leading-normal text-ellipsis text-zinc-500'>
            Código da sala:{' '}
            <span className='text-ellipsis text-sm font-normal leading-normal text-zinc-300'>
              {roomId}
            </span>
          </p>
        </div>
        <button className='bg-zinc-800 flex justify-center items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-700'>
          Compartilhar <Share2 size={16} />
        </button>
      </div>
    </main>
  );
}

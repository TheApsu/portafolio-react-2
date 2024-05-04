export default function Presentation() {
  return (
    <section className='flex flex-col justify-between gap-16'>
      <div>
        <p className='text-secondaryText font-bold text-3xl lg:text-4xl'>
          Full Stack
        </p>
        <p className='text-white font-bold text-6xl lg:text-7xl'>
          Ricardo Duque
        </p>
        <p className='text-white text-xl lg:text-2xl mt-3'>
          {' '}
          Codea tu futuro
          <span className='text-secondaryText font-bold'>
            {' '}
            Código limpio, resultados brillantes
          </span>
        </p>
      </div>
    </section>
  );
}

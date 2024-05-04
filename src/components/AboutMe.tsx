export default function AboutMe() {
  return (
    <div>
      <h2 className='text-3xl mb-3 lg:text-4xl text-white font-bold uppercase text-center'>
        Sobre mi{' '}
      </h2>
      <p className='text-white text-xl lg:text-2xl text-justify'>
        ¡Hola! Soy <strong className='text-secondaryText'>Ricardo Duque</strong>{' '}
        originario de Venezuela, un desarrollador apasionado con{' '}
        <strong className='text-secondaryText font-bold'>3 años</strong> de
        experiencia en el campo de la tecnología. Mi enfoque se centra en crear
        <strong className='text-secondaryText '> soluciones</strong> digitales
        que no solo funcionen, sino que también{' '}
        <strong className='text-secondaryText '>inspiren.</strong>
      </p>
    </div>
  );
}

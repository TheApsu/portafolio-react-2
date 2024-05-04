type TechnologiesCardProps = {
  title: string;
  icon: string | TrustedHTML;
  technologies: string[];
  prefix: string;
};

export default function TechnologiesCard({
  prefix,
  title,
  icon,
  technologies,
}: TechnologiesCardProps) {
  return (
    <>
      <div className='bg-slate-200 rounded-lg overflow-hidden'>
        <h2 className='text-white p-4 bg-primary gap-4 text-4xl text-center flex w-full justify-center items-center  uppercase font-bold'>
          {title}{' '}
          <div
            className='mb-2'
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
        </h2>

        <div className='col-span-1 grid grid-cols-4  rounded-lg '>
          {technologies.map((x, index) => (
            <div
              key={index}
              className='p-4 relative w-full perspective-200  flex items-center justify-center'
            >
              <img
                className='w-62 z-10 rounded-lg overflow-hidden drop-shadow-md'
                src={prefix + x}
                alt='logo'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

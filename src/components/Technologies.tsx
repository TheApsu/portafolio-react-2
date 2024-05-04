import TechnologiesCard from './TechnologiesCard';

const frontend: string[] = [
  'angular.png',
  'flutter.png',
  'ionic.png',
  'react.png',
  'tailwind.png',
  'html.png',
  'js.png',
  'css.svg',
  'sass.png',
  'ts.png',
];
const backend: string[] = ['mongo.png', 'node.png'];
const tools: string[] = [
  'firebase.png',
  'git.png',
  'github.png',
  'google_cloud.png',
];

export default function Technologies() {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center'>
        <div>
          <TechnologiesCard
            title='Frontend'
            technologies={frontend}
            icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
          '
            prefix='/frontend/'
          />
        </div>
        <div>
          <TechnologiesCard
            title='Backend'
            technologies={backend}
            prefix='/backend/'
            icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path strokeLinecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          
          '
          />
        </div>
        <div>
          <TechnologiesCard
            title='Cloud'
            technologies={tools}
            prefix='/tools/'
            icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
            <path strokeLinecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          
          '
          />
        </div>
      </div>
    </div>
  );
}

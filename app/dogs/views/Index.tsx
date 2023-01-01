import { useLoaderData } from '@remix-run/react';
import type { DogsController } from '../dogs.controller';

export default function Index() {
  const { dogs } = useLoaderData<ReturnType<DogsController['indexView']>>()

  return (
    <div>
      <h1>Welcome to dogs</h1>

      <ul>
        {dogs.map(dog => {
          return <li key={dog.id}>
            <a href={`/dogs/${dog.id}`}>
              {dog.name}
            </a>
          </li>
        })}
      </ul>
    </div>
  );
}

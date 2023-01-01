import { useLoaderData } from '@remix-run/react';
import { useApiClient } from '~/core';
import type { DogsController } from '../dogs.controller';

export default function Details() {
  const { dog } = useLoaderData<ReturnType<DogsController['detailsViewBackend']>>()

  /**
   * The framework generates this hook with API definitions correlating to all APIs
   * with a @Api route decorator, like generating a client via OpenAPI. 
   */
  const apis = useApiClient();

  const saveDogUpdates: React.FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.target as any);
    const params = { id: dog.id };
    const body = Object.fromEntries(data.entries());
    await apis.DogsController.updateDog(params, body);
    location.reload();
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{dog.name}</h1>
      <p>{dog.about}</p>

      <form onSubmit={saveDogUpdates}>
        <input name="name" value={dog.name}></input>
        <input name="about" value={dog.about}></input>
        <button>Save changes</button>
      </form>
    </div>
  );
}

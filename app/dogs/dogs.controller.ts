import { Api, Body, Controller, Inject, Param, ParseIntPipe, View, ViewBackend } from '~/core';
import type { Dog, DogsService } from './dogs.service';
import Details from './views/Details';
import Index from './views/Index';

@Controller('dogs')
export class DogsController {
  @View('', {
    meta: () => ({
      title: "Dogs",
    })
  })
  readonly index = Index;

  @View('details', {
    meta: (data: ReturnType<DogsController['detailsViewBackend']>) => ({
      title: data.dog.name,
    })
  })
  readonly details = Details;

  constructor(
    @Inject() private readonly dogsService: DogsService,
  ) { }

  /**
   * Do REST API things, like take in new data from XHR requests and update
   * the database.
   */
  @Api.Post('')
  createDog() {
    return this.dogsService.getDogs();
  }

  /**
   * Do REST API things, like take in new data from XHR requests and update
   * the database.
   */
  @Api.Put('details/$id')
  updateDog(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedDog: Dog,
  ) {
    return this.dogsService.updateDog(updatedDog);
  }

  /**
   * Do server-side rendering stuff so we can pass it to the view
   * using Remix's useLoaderData.
   */
  @ViewBackend.Get('index')
  indexViewBackend() {
    return {
      dogs: this.dogsService.getDogs()
    };
  }

  /**
   * Do server-side rendering stuff so we can pass it to the view
   * using Remix's useLoaderData.
   */
  @ViewBackend.Get('details/$id')
  detailsViewBackend(@Param('id', ParseIntPipe) id: number) {
    return {
      dog: this.dogsService.getDog(id)
    };
  }
}

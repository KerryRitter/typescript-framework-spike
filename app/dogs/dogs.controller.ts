import { Api, Body, Controller, Inject, Param, ParseIntPipe, View, ViewBackend } from '~/core';
import type { Dog, DogService } from './dogs.service';
import Details from './views/Details';
import Index from './views/Index';

@Controller('dogs')
export class DogsController {
  @View('') readonly index = Index;
  @View('details') readonly details = Details;

  constructor(
    @Inject() private readonly dogService: DogService,
  ) { }

  /**
   * Do REST API things, like take in new data from XHR requests and update
   * the database.
   */
  @Api.Post('')
  createDog() {
    return this.dogService.getDogs();
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
    return this.dogService.updateDog(updatedDog);
  }

  /**
   * Do server-side rendering stuff so we can pass it to the view
   * using Remix's useLoaderData.
   */
  @ViewBackend.Get('index')
  indexView() {
    return {
      dogs: this.dogService.getDogs()
    };
  }

  /**
   * Do server-side rendering stuff so we can pass it to the view
   * using Remix's useLoaderData.
   */
  @ViewBackend.Get('details/$id')
  detailsView(@Param('id', ParseIntPipe) id: number) {
    return {
      dog: this.dogService.getDog(id)
    };
  }
}

import { Api, Controller, Inject, View } from '~/turntable';
import type { DogService } from './dogs.service';
import Index from './views/Index';

@Controller('dogs')
export class DogsController {
  constructor(
    @Inject() private readonly dogService: DogService
  ) {

  }

  @Api.Get('')
  indexApi() {
    return this.dogService.getDogs()
  }

  @View.Get('')
  index() {
    return Index;
  }

  @Api.Get('details')
  detailsApi() {
    return { test: 1 }
  }

  @View.Get('details')
  details() {
    return Index;
  }
}

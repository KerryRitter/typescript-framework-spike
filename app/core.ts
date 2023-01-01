const dummyMethodDecorator = (...params: any[]) => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) { };
};

const dummyParameterDecorator = (...params: any[]) => {
  return function (target: any, propertyKey: string, descriptor: number) { };
};

const dummyClassDecorator = (...params: any[]) => {
  return function (constructor: Function) { };
}

const dummyPropertyDecorator = (...params: any[]) => {
  return function (target: Object, propertyKey: string) {
  };
}

export const View = dummyPropertyDecorator;

export const Module = dummyClassDecorator;
export const Controller = dummyClassDecorator;
export const Injectable = dummyClassDecorator;

export const Inject = dummyParameterDecorator;
export const Param = dummyParameterDecorator;
export const Body = dummyParameterDecorator;

export const Api = {
  Get: dummyMethodDecorator,
  Post: dummyMethodDecorator,
  Put: dummyMethodDecorator,
  Patch: dummyMethodDecorator,
  Delete: dummyMethodDecorator
}

export const ViewBackend = {
  Get: dummyMethodDecorator,
  Post: dummyMethodDecorator,
  Put: dummyMethodDecorator,
  Patch: dummyMethodDecorator,
  Delete: dummyMethodDecorator
}

export class ParseIntPipe { }
export class CoreAuthModule {
  static register(...params: any[]) { }
}
export class CoreAuthController {
  readonly login = null as any as () => JSX.Element;
}

export const useApiClient = () => { return null as any }
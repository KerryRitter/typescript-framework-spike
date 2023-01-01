export const turntable = (klass: any) => {
  return { loader: () => null, action: () => null }
}

export function Get(arg1?: any) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  };
}

export function Controller(arg1?: any) {
  return function (constructor: Function) {
  }
}

export function Injectable(arg1?: any) {
  return function (constructor: Function) {
  }
}

export function Inject() {
  return function (target: any, propertyKey: string, parameterIndex: number) {
  };
}

export const Api = {
  Get
}

export const View = {
  Get
}
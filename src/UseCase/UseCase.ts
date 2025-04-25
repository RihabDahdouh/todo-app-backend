export interface HandlerService<Return, Parameters extends any[]> {
    handle: (...params: Parameters) => Return;
  }
  
  export type UseCase<Return, Parameters extends any[]> = HandlerService<Return, Parameters>;
  
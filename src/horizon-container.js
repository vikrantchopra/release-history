import Horizon from '@horizon/client'; 

const _horizon = Horizon({host: 'localhost:8181'}); 

export default { 
  get: () => _horizon 
}

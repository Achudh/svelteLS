import {writable} from 'svelte/store';
const stateNameProvider = "provider";
const stateNameAuth = "auth";
const stateNameShop = "shop";
const State = writable({
	name: stateNameProvider,
    nodeUrl: "http://localhost:9091",
    account: "0x9A58d826e7B41b20Ad30a0fC1171B09b28a2403F",
    stateNameAuth: stateNameAuth,
    stateNameShop: stateNameShop,
    login: true
}
);
export default State;
import { Handler } from "./models";

/*
 * FunctionTagHandler module for iOS lazily adds the global event listner the first time a function tag
 * needs to be registered. Due to some limitations in native enviroment all Function Call tag events
 * from native realm are sent over as GTM_FUNCTION_CALL_TAG event. The event objects
 * include  _fn (function name) and payload attributes which are passed down to registered
 * handlers respectively
 */

const GTM_FUNCTION_CALL_TAG_EVENT = "GTM_FUNCTION_CALL_TAG";

interface Listener {
  functionName: string;
  handler: Handler;
}

// Downstream events from native realm
const listeners: Array<Listener> = [];
let listenerRegistered = false;

export default (functionName: string, handler: Handler): void => {

};

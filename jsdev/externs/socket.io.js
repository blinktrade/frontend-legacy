/**
 * @type {Object}
 * @const
 */
var io = {};

/**
 * @param {string} uri
 * @param {?Object.<string, string>=} options
 * @return {Socket}
 */
io.connect = function(uri, options) {};

/** @constructor*/
var Socket = function() {};

/**
 * @type {Object.<string,SocketNamespace>}
 */
Socket.prototype.namespaces;

/**
 * @param {function()=} fn
 */
Socket.prototype.connect = function(fn) {};


/**
 * @param {string} event
 * @param {function(...)} handler
 */
Socket.prototype.on = function(event, handler) {};

/**
 * @param {string} name Name of event to emit
 * @param {...} args Variable number of arguments for pass to event
 */
Socket.prototype.emit = function(name, args) {};

/** @constructor*/
var SocketNamespace = function() {};

/**
 * @type {Socket}
 */
SocketNamespace.prototype.socket;

/**
 * @param {string} event
 * @param {function(...)} handler
 */
SocketNamespace.prototype.on = function(event, handler) {};

/**
 * @param {string} name Name of event to emit
 * @param {...} args Variable number of arguments for pass to event
 */
SocketNamespace.prototype.emit = function(name, args) {};

/**
 * Method for disconnecting the channel
 */
SocketNamespace.prototype.disconnect = function() {};

/**
 * @param {Object} data Packet data
 */
SocketNamespace.prototype.packet = function(data) {};
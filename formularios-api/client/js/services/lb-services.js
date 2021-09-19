// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$verify
             * @methodOf lbServices.User
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#setPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_SOLICITANTE
 * @header lbServices.T_PYC_SOLICITANTE
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_SOLICITANTE` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_SOLICITANTE",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_SOLICITANTES/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#create
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_SOLICITANTES",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#patchOrCreate
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_SOLICITANTES",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#replaceOrCreate
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_SOLICITANTES/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#upsertWithWhere
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_SOLICITANTES/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#exists
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_SOLICITANTES/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#findById
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_SOLICITANTES/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#replaceById
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_SOLICITANTES/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#find
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_SOLICITANTES",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#findOne
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_SOLICITANTES/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#updateAll
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_SOLICITANTES/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#deleteById
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_SOLICITANTES/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#count
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_SOLICITANTES/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_SOLICITANTE id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_SOLICITANTES/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#createChangeStream
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_SOLICITANTES/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#createMany
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_SOLICITANTES",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.solicitante() instead.
            "::get::T_PYC_INSCRIPCION::solicitante": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/solicitante",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#upsert
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#updateOrCreate
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#update
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#destroyById
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#removeById
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_SOLICITANTE#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_SOLICITANTE
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_SOLICITANTE id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_SOLICITANTE#modelName
        * @propertyOf lbServices.T_PYC_SOLICITANTE
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_SOLICITANTE`.
        */
        R.modelName = "T_PYC_SOLICITANTE";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_TIPO_USUARIO
 * @header lbServices.T_PYC_TIPO_USUARIO
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_TIPO_USUARIO` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_TIPO_USUARIO",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_TIPO_USUARIOS/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#create
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#patchOrCreate
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#replaceOrCreate
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#upsertWithWhere
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#exists
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#findById
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#replaceById
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#find
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_TIPO_USUARIOS",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#findOne
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#updateAll
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#deleteById
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#count
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_TIPO_USUARIO id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#createChangeStream
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_TIPO_USUARIOS/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#createMany
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_TIPO_USUARIOS",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.tipo_usuario() instead.
            "::get::T_PYC_INSCRIPCION::tipo_usuario": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/tipo_usuario",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#upsert
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#updateOrCreate
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#update
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#destroyById
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#removeById
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPO_USUARIO#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_TIPO_USUARIO
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_TIPO_USUARIO id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_TIPO_USUARIO#modelName
        * @propertyOf lbServices.T_PYC_TIPO_USUARIO
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_TIPO_USUARIO`.
        */
        R.modelName = "T_PYC_TIPO_USUARIO";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_CANALES_COMUNICACION
 * @header lbServices.T_PYC_CANALES_COMUNICACION
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_CANALES_COMUNICACION` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_CANALES_COMUNICACION",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_CANALES_COMUNICACIONES/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#create
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#patchOrCreate
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#replaceOrCreate
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#upsertWithWhere
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#exists
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#findById
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#replaceById
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#find
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#findOne
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#updateAll
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#deleteById
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#count
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CANALES_COMUNICACION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#createChangeStream
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#createMany
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_CANALES_COMUNICACIONES",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.canales_comunicacion() instead.
            "::get::T_PYC_INSCRIPCION::canales_comunicacion": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/canales_comunicacion",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#upsert
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#updateOrCreate
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#update
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#destroyById
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#removeById
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_COMUNICACION#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_CANALES_COMUNICACION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CANALES_COMUNICACION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_CANALES_COMUNICACION#modelName
        * @propertyOf lbServices.T_PYC_CANALES_COMUNICACION
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_CANALES_COMUNICACION`.
        */
        R.modelName = "T_PYC_CANALES_COMUNICACION";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_CANALES_DIGITALES
 * @header lbServices.T_PYC_CANALES_DIGITALES
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_CANALES_DIGITALES` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_CANALES_DIGITALES",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_CANALES_DIGITALESS/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#create
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#patchOrCreate
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#replaceOrCreate
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#upsertWithWhere
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#exists
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#findById
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#replaceById
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#find
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_CANALES_DIGITALESS",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#findOne
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#updateAll
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#deleteById
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#count
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CANALES_DIGITALES id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#createChangeStream
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_CANALES_DIGITALESS/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#createMany
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_CANALES_DIGITALESS",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.canales_digitales() instead.
            "::get::T_PYC_INSCRIPCION::canales_digitales": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/canales_digitales",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#upsert
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#updateOrCreate
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#update
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#destroyById
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#removeById
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CANALES_DIGITALES#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_CANALES_DIGITALES
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CANALES_DIGITALES id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_CANALES_DIGITALES#modelName
        * @propertyOf lbServices.T_PYC_CANALES_DIGITALES
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_CANALES_DIGITALES`.
        */
        R.modelName = "T_PYC_CANALES_DIGITALES";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_TIPOS_EVENTO
 * @header lbServices.T_PYC_TIPOS_EVENTO
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_TIPOS_EVENTO` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_TIPOS_EVENTO",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_TIPOS_EVENTOS/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#create
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#patchOrCreate
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#replaceOrCreate
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#upsertWithWhere
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#exists
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#findById
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#replaceById
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#find
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_TIPOS_EVENTOS",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#findOne
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#updateAll
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#deleteById
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#count
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_TIPOS_EVENTO id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#createChangeStream
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_TIPOS_EVENTOS/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#createMany
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_TIPOS_EVENTOS",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_EVENTOS.tipos_evento() instead.
            "::get::T_PYC_EVENTOS::tipos_evento": {
              url: urlBase + "/T_PYC_EVENTOSS/:id/tipos_evento",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#upsert
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#updateOrCreate
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#update
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#destroyById
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#removeById
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_TIPOS_EVENTO#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_TIPOS_EVENTO
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_TIPOS_EVENTO id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_TIPOS_EVENTO#modelName
        * @propertyOf lbServices.T_PYC_TIPOS_EVENTO
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_TIPOS_EVENTO`.
        */
        R.modelName = "T_PYC_TIPOS_EVENTO";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_EVENTOS
 * @header lbServices.T_PYC_EVENTOS
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_EVENTOS` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_EVENTOS",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_EVENTOSS/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use T_PYC_EVENTOS.tipos_evento() instead.
            "prototype$__get__tipos_evento": {
              url: urlBase + "/T_PYC_EVENTOSS/:id/tipos_evento",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#create
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_EVENTOSS",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#patchOrCreate
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_EVENTOSS",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#replaceOrCreate
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_EVENTOSS/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#upsertWithWhere
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_EVENTOSS/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#exists
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_EVENTOSS/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#findById
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_EVENTOSS/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#replaceById
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_EVENTOSS/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#find
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_EVENTOSS",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#findOne
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_EVENTOSS/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#updateAll
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_EVENTOSS/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#deleteById
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_EVENTOSS/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#count
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_EVENTOSS/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_EVENTOS id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_EVENTOSS/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#createChangeStream
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_EVENTOSS/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#createMany
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_EVENTOSS",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_CUESTIONARIOS_ANEXO.evento() instead.
            "::get::T_PYC_CUESTIONARIOS_ANEXO::evento": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id/evento",
              method: "GET",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.eventos() instead.
            "::get::T_PYC_INSCRIPCION::eventos": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/eventos",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#upsert
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#updateOrCreate
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#update
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#destroyById
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#removeById
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_EVENTOS id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_EVENTOS#modelName
        * @propertyOf lbServices.T_PYC_EVENTOS
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_EVENTOS`.
        */
        R.modelName = "T_PYC_EVENTOS";


            /**
             * @ngdoc method
             * @name lbServices.T_PYC_EVENTOS#tipos_evento
             * @methodOf lbServices.T_PYC_EVENTOS
             *
             * @description
             *
             * Fetches belongsTo relation tipos_evento.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_EVENTOS id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPOS_EVENTO` object.)
             * </em>
             */
        R.tipos_evento = function() {
          var TargetResource = $injector.get("T_PYC_TIPOS_EVENTO");
          var action = TargetResource["::get::T_PYC_EVENTOS::tipos_evento"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_PROFESION
 * @header lbServices.T_PYC_PROFESION
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_PROFESION` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_PROFESION",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_PROFESIONES/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#create
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_PROFESIONES",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#patchOrCreate
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_PROFESIONES",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#replaceOrCreate
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_PROFESIONES/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#upsertWithWhere
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_PROFESIONES/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#exists
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_PROFESIONES/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#findById
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_PROFESIONES/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#replaceById
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_PROFESIONES/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#find
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_PROFESIONES",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#findOne
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_PROFESIONES/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#updateAll
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_PROFESIONES/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#deleteById
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_PROFESIONES/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#count
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_PROFESIONES/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_PROFESION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_PROFESIONES/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#createChangeStream
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_PROFESIONES/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#createMany
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_PROFESIONES",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.profesion() instead.
            "::get::T_PYC_INSCRIPCION::profesion": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/profesion",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#upsert
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#updateOrCreate
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#update
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#destroyById
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#removeById
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_PROFESION#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_PROFESION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_PROFESION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_PROFESION#modelName
        * @propertyOf lbServices.T_PYC_PROFESION
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_PROFESION`.
        */
        R.modelName = "T_PYC_PROFESION";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO
 * @header lbServices.T_PYC_CUESTIONARIOS_ANEXO
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_CUESTIONARIOS_ANEXO` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_CUESTIONARIOS_ANEXO",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use T_PYC_CUESTIONARIOS_ANEXO.evento() instead.
            "prototype$__get__evento": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id/evento",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#create
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#patchOrCreate
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#replaceOrCreate
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#upsertWithWhere
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#exists
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#findById
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#replaceById
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#find
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#findOne
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#updateAll
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#deleteById
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#count
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CUESTIONARIOS_ANEXO id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#createChangeStream
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#createMany
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_CUESTIONARIOS_ANEXOS",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_CUESTIONARIO_X_INSCRIPCION.cuestionario_anexo() instead.
            "::get::T_PYC_CUESTIONARIO_X_INSCRIPCION::cuestionario_anexo": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id/cuestionario_anexo",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#upsert
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#updateOrCreate
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#update
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#destroyById
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#removeById
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CUESTIONARIOS_ANEXO id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#modelName
        * @propertyOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_CUESTIONARIOS_ANEXO`.
        */
        R.modelName = "T_PYC_CUESTIONARIOS_ANEXO";


            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIOS_ANEXO#evento
             * @methodOf lbServices.T_PYC_CUESTIONARIOS_ANEXO
             *
             * @description
             *
             * Fetches belongsTo relation evento.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CUESTIONARIOS_ANEXO id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R.evento = function() {
          var TargetResource = $injector.get("T_PYC_EVENTOS");
          var action = TargetResource["::get::T_PYC_CUESTIONARIOS_ANEXO::evento"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_INSCRIPCION
 * @header lbServices.T_PYC_INSCRIPCION
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_INSCRIPCION` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_INSCRIPCION",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_INSCRIPCIONES/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use T_PYC_INSCRIPCION.solicitante() instead.
            "prototype$__get__solicitante": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/solicitante",
              method: "GET",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.tipo_usuario() instead.
            "prototype$__get__tipo_usuario": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/tipo_usuario",
              method: "GET",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.canales_digitales() instead.
            "prototype$__get__canales_digitales": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/canales_digitales",
              method: "GET",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.canales_comunicacion() instead.
            "prototype$__get__canales_comunicacion": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/canales_comunicacion",
              method: "GET",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.profesion() instead.
            "prototype$__get__profesion": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/profesion",
              method: "GET",
            },

            // INTERNAL. Use T_PYC_INSCRIPCION.eventos() instead.
            "prototype$__get__eventos": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/eventos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#create
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_INSCRIPCIONES",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#patchOrCreate
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_INSCRIPCIONES",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#replaceOrCreate
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#upsertWithWhere
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#exists
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#findById
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#replaceById
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#find
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_INSCRIPCIONES",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#findOne
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#updateAll
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#deleteById
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#count
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#createChangeStream
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_INSCRIPCIONES/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#createMany
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_INSCRIPCIONES",
              method: "POST",
            },

            // INTERNAL. Use T_PYC_CUESTIONARIO_X_INSCRIPCION.inscripcion() instead.
            "::get::T_PYC_CUESTIONARIO_X_INSCRIPCION::inscripcion": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id/inscripcion",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#upsert
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#updateOrCreate
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#update
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#destroyById
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#removeById
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_INSCRIPCION#modelName
        * @propertyOf lbServices.T_PYC_INSCRIPCION
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_INSCRIPCION`.
        */
        R.modelName = "T_PYC_INSCRIPCION";


            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#solicitante
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation solicitante.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_SOLICITANTE` object.)
             * </em>
             */
        R.solicitante = function() {
          var TargetResource = $injector.get("T_PYC_SOLICITANTE");
          var action = TargetResource["::get::T_PYC_INSCRIPCION::solicitante"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#tipo_usuario
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation tipo_usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_TIPO_USUARIO` object.)
             * </em>
             */
        R.tipo_usuario = function() {
          var TargetResource = $injector.get("T_PYC_TIPO_USUARIO");
          var action = TargetResource["::get::T_PYC_INSCRIPCION::tipo_usuario"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#canales_digitales
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation canales_digitales.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_DIGITALES` object.)
             * </em>
             */
        R.canales_digitales = function() {
          var TargetResource = $injector.get("T_PYC_CANALES_DIGITALES");
          var action = TargetResource["::get::T_PYC_INSCRIPCION::canales_digitales"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#canales_comunicacion
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation canales_comunicacion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CANALES_COMUNICACION` object.)
             * </em>
             */
        R.canales_comunicacion = function() {
          var TargetResource = $injector.get("T_PYC_CANALES_COMUNICACION");
          var action = TargetResource["::get::T_PYC_INSCRIPCION::canales_comunicacion"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#profesion
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation profesion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_PROFESION` object.)
             * </em>
             */
        R.profesion = function() {
          var TargetResource = $injector.get("T_PYC_PROFESION");
          var action = TargetResource["::get::T_PYC_INSCRIPCION::profesion"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_INSCRIPCION#eventos
             * @methodOf lbServices.T_PYC_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation eventos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_EVENTOS` object.)
             * </em>
             */
        R.eventos = function() {
          var TargetResource = $injector.get("T_PYC_EVENTOS");
          var action = TargetResource["::get::T_PYC_INSCRIPCION::eventos"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
 * @header lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `T_PYC_CUESTIONARIO_X_INSCRIPCION` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "T_PYC_CUESTIONARIO_X_INSCRIPCION",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use T_PYC_CUESTIONARIO_X_INSCRIPCION.cuestionario_anexo() instead.
            "prototype$__get__cuestionario_anexo": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id/cuestionario_anexo",
              method: "GET",
            },

            // INTERNAL. Use T_PYC_CUESTIONARIO_X_INSCRIPCION.inscripcion() instead.
            "prototype$__get__inscripcion": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id/inscripcion",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#create
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#patchOrCreate
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#replaceOrCreate
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#upsertWithWhere
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#exists
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#findById
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#replaceById
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#find
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#findOne
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{"where":{"something":"value"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#updateAll
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#deleteById
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#count
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#prototype$patchAttributes
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CUESTIONARIO_X_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#createChangeStream
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#createMany
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/T_PYC_CUESTIONARIOS_X_INSCRIPCIONES",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#upsert
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#updateOrCreate
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#patchOrCreateWithWhere
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#update
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#destroyById
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#removeById
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#prototype$updateAttributes
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CUESTIONARIO_X_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIO_X_INSCRIPCION` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#modelName
        * @propertyOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
        * @description
        * The name of the model represented by this $resource,
        * i.e. `T_PYC_CUESTIONARIO_X_INSCRIPCION`.
        */
        R.modelName = "T_PYC_CUESTIONARIO_X_INSCRIPCION";


            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#cuestionario_anexo
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation cuestionario_anexo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CUESTIONARIO_X_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_CUESTIONARIOS_ANEXO` object.)
             * </em>
             */
        R.cuestionario_anexo = function() {
          var TargetResource = $injector.get("T_PYC_CUESTIONARIOS_ANEXO");
          var action = TargetResource["::get::T_PYC_CUESTIONARIO_X_INSCRIPCION::cuestionario_anexo"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION#inscripcion
             * @methodOf lbServices.T_PYC_CUESTIONARIO_X_INSCRIPCION
             *
             * @description
             *
             * Fetches belongsTo relation inscripcion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - T_PYC_CUESTIONARIO_X_INSCRIPCION id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `T_PYC_INSCRIPCION` object.)
             * </em>
             */
        R.inscripcion = function() {
          var TargetResource = $injector.get("T_PYC_INSCRIPCION");
          var action = TargetResource["::get::T_PYC_CUESTIONARIO_X_INSCRIPCION::inscripcion"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);

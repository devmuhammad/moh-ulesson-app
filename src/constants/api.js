import axios from 'axios';
import CustomHttpError from './CustomHttpError';

const api = axios.create({
  // withCredentials: environment.environment !== 'local',
});

api.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    if (!err.response) {
      return Promise.reject(
        new CustomHttpError(
          'Error occurred while sending the request, please check your internet settings',
          {
            statusCode: 0,
            responseText:
              'Error occurred while sending the request, please check your internet settings',
          },
        ),
      );
    }
    // Listen for status code unauthorized, and then trigger logout.
    // if (err.response.status === 401) {
    //   import('../store').then((module) => {
    //     const store = module.default;
    //     store.dispatch(logout());
    //   });
    //   return Promise.reject(
    //     new CustomHttpError('User session has expired!', {
    //       statusCode: err.response.status,
    //       responseText: err.response.data.responseText,
    //     }),
    //   );
    // }

    if (err.response.status === 500) {
      import('../redux/store').then((module) => {
        const store = module.default;
        store.dispatch(logout());
      });
      return Promise.reject(
        new CustomHttpError(err.response.data.errors[0].message, {
          statusCode: err.response.status,
          responseText: err.response.data.responseText,
        }),
      );
    }
    if (err.response.status === 403) {
      return Promise.reject(
        new CustomHttpError('You do not have permission to perform this operation', {
          statusCode: err.response.status,
          responseText: 'You do not have permission to perform this operation',
        }),
      );
    }
    if (err.response?.data?.errors) {
      return Promise.reject(
        new CustomHttpError(err.response.data.errors[0].message, {
          statusCode: err.response.status,
          responseText: err.response.data.errors[0].message,
          payload: err.response.data.errors,
          responseCode: err.response.statusText,
        }),
      );
    }

    return Promise.reject(
      new CustomHttpError('Oops, something went wrong! We are not quite sure what it is', {
        statusCode: err.response.status,
        responseText: 'Oops, something went wrong! We are not quite sure what it is',
      }),
    );
  },
);

export default api;

import axios from 'axios';

axios.defaults.withCredentials = true;

const API_URI = 'http://localhost:8000/api'

export const userLogin = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .post(`${API_URI}/login/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const userSignUp = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .post(`${API_URI}/signup/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const userIsLogged = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .post(`${API_URI}/me/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const userLogout = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .post(`${API_URI}/logout/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const carsList = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .get(`${API_URI}/cars/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const carItem = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .get(`${API_URI}/cars/${data.id}/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const carItemAdd = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .post(`${API_URI}/cars/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const carItemEdit = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .patch(`${API_URI}/cars/${data.id}/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const carItemDelete = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .delete(`${API_URI}/cars/${data.id}/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}


export const appointmentsList = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .get(`${API_URI}/appointments/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const appItem = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .get(`${API_URI}/appointments/${data.id}/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const appItemAdd = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .post(`${API_URI}/appointments/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const appItemEdit = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .patch(`${API_URI}/appointments/${data.id}/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}

export const appItemDelete = (data: any, onSuccess: (r: any) => void, onError: (r: any) => void) => {
  axios
    .delete(`${API_URI}/appointments/${data.id}/`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((response) => {
      onError(response);
    })
}
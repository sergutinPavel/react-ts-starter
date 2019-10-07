import axios from 'axios';

export const API = (config: any) => {

  let headers: any = {
    'Content-Type': 'application/json',
  };
  if (config.headers) {
    headers = { ...config.headers };
  }
  if (localStorage.getItem('access_token')) {
    headers = {
      ...headers,
      'Authorization': `Bearer ${JSON.parse((localStorage.getItem('access_token') as string))}`,
    }
  }

  config.params = {...config.params,
    stage_id:localStorage.getItem('stageId'),
  };

  console.log(config, 'config');

  return axios({
    ...config,
    baseURL: `${(process.env as any).REACT_APP_API_ENDPOINT}`,
    headers,
    withCredentials: true,
  });
};

import { api } from 'boot/axios';
const HEADERS = {
  'Content-Type': 'application/json'
};


const contact = {
  create: function(data: {
    name: string,
    phone: string,
    wechat: string,
  }) {
    return api.post('/contact/createContact',
      data,
      {
        headers: HEADERS
      }
    );
  }
}

export { contact }

import request from 'supertest';

const requester = request('http://localhost:8000/api/');

export default requester;

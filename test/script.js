import http from 'k6/http';
import { check, sleep } from 'k6';

const stages = [];
for(let i = 0; i < 10; i++) {
    stages.push({ duration: '30s', target: 25*i });
    stages.push({ duration: '1m', target: 25*i });
}

export const options = { stages };

const pacing = 1.0;

export default function () {
  const start = new Date().getTime();

  const res = http.get(`http://localhost:4545/customers/123${Math.floor(Math.random() * 500)}`);
  check(res, { 'status was 201': (r) => r.status == 201 });

  const end = new Date().getTime();
  const elapsed = (end-start)/1000;

  if(pacing-elapsed>0) sleep(pacing);
}
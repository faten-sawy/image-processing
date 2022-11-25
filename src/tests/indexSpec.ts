import supertest from 'supertest';
import app from "../index"

const request = supertest(app)
describe('test end point response',()=>{
    it('descripe endpoint response',async ()=>{
        const response = await request.get('/images/');
        expect(response.status).toBe(200);
    })
    
})

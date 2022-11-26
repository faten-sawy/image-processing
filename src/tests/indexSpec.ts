import supertest from 'supertest';
import app from "../index"
import resize from '../helper/sharp';
import path from "path"

const request = supertest(app)
describe('test end point response',()=>{
    it('descripe endpoint response',async ()=>{
        const response = await request.get('/images/');
        expect(response.status).toBe(200);
    })

})
describe('test image processing',()=>{
    it('check image processing work correctly', async ()=>{
        const imgOut =path.join(__dirname,`../../Images//thumb/tree.jpg`)
        const imgPath = path.join(__dirname,`../../Images/tree.jpg`)

        const result =await resize(imgPath,100,100,imgOut)

        expect(result).toEqual(imgOut)

    })
})
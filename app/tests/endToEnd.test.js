const supertest = require("supertest");
const getirApp = require("../../server");
const config = {
    HOST: "localhost",
    PORT: '3000',
    MONGODB_CONNECTION_STRING: 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',
    MONGODB_DATABASE: 'getir-case-study'
  }

describe("Records endpoint testss", () => {

    it("should have proper response body according to given request body", async() => {

        const request = supertest(await getirApp(config))

        const startDate = "2016-11-01"
        const endDate = "2016-11-03"
        const maxCount = 60
        const minCount = 40

        const { status, body} = await request
            .post('/records/_query')
            .send({
                startDate: '2016-11-01',
                endDate: '2016-11-03',
                maxCount: 60,
                minCount: 40
            })
            .set('Accept', 'application/json')
        
        expect(status).toEqual(200);
        expect(body.code).toEqual(0);

        body.records.forEach((record) => {
            expect(record.totalCount).toBeGreaterThanOrEqual(minCount);
            expect(record.totalCount).toBeLessThanOrEqual(maxCount);
        })
    });
});
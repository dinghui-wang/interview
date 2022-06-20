import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
import { hasUncaughtExceptionCaptureCallback } from 'process';

describe('test/controller/user.test.ts', () => {
    it('should POST /api/user/login', async () => {
        // create app
        const app = await createApp<Framework>();

        // make request
        const result = await createHttpRequest(app).post('/api/user/login').send({ username: 'jack', password: 'redballoon' });

        expect(result.body.code).toBe(200);
        expect(result.body.message).toBe('登录成功');

        expect(result.body.timeout).toBe(1000);
        

        // close app
        await close(app);
    })
})
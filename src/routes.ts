import { Request, Response} from 'express';
import CreateUser from './services/CreateUser';


export function helloWorld(req: Request, res: Response) {
    const user = CreateUser({
        name: 'Júnior',
        email: 'jr@email',
        password: '1234',
        tech: [
            'React', 
            'React Native'
        ]
    });

    console.log(user.name);
    console.log(user.tech);

    return res.json({ Hello: 'Hello world' });
}
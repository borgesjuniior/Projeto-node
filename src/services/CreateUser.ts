interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    tech: Array<string | TechObject>;
}

export default function CreateUserData({name = '', email, password, tech}: CreateUserData){
    const user = {
        name,
        email,
        password,
        tech,
    }
    return user;
};
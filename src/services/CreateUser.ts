interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    tech: string[];
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
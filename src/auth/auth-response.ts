export interface AuthResponse {
    user: {
        id: number,
        email: string,
        nome: string,
        cidade: string,
        rua: string,
        numero: string,
        estado: string
        lat: number,
        long: number,
        token: string,
        expiresIn: number,
    }
}
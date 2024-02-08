import z from 'zod';

export const createProductSchema = z.object({
    body: z.object({
        name: z.string({ required_error: 'Nome do produto é obrigatório' }),
        price: z.number({ required_error: 'Preço é obrigatório' })
            .nonnegative({ message: 'Preço deve ser um número positivo' }),
        id_image: z.string({ required_error: 'O Id da imagem é obrigatório', invalid_type_error: 'O Id da imagem deve ser uma string' }),
    })
});
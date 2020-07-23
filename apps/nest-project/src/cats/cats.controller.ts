import { Controller, Get } from '@nestjs/common';

interface cat {
    name: string,
    color: string
}

@Controller('cats')
export class CatsController {
    @Get('getcat')
    getCats(params: cat): cat {
        console.log(params)
        return {
            name: 'Tom',
            color: 'black'
        }
    }
}

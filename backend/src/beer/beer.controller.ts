import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { BeerService } from './beer.service';


@Controller('beer')
export class BeerController {
  constructor(private readonly beerService: BeerService) {}

  @Post()
  create(@Body() createBeerDto: CreateBeerDto) {
    return this.beerService.create(createBeerDto);
  }
   @Get()
   findAll() {
    return this.beerService.findAll();
  }
 
  @Get('/random')
   findRandom(){
 return this.beerService.findRandom()

}


  @Get('/:id')
  findOne(@Param('id') id: string) {
   return this.beerService.findOne(id);
 }



}
  



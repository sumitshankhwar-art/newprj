import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Patch,
  ParseIntPipe,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { createPropertyDto } from './dto/createProperty.dto';
import { Idparamdto } from './dto/idparam.dto';
import { PropertyService } from './property.service';
import { updatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {

    constructor(private propertyService:PropertyService){

    }

  @Get()
  findAll(@Query() pagination:PaginationDto) {
    return this.propertyService.findAll(pagination);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  createPropery(@Body() property: createPropertyDto) {
    return this.propertyService.create(property);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }

  @Patch(':id')
  update(@Param() param: Idparamdto, @Body() body: updatePropertyDto) {
    return this.propertyService.update(param.id,body);
  }

  @Delete(':id')
  delete(@Param() param:Idparamdto){
    return this.propertyService.delete(param.id);
  }
}

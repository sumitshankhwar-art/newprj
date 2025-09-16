import { Controller,Get,Post,Param,Patch, ParseIntPipe,Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { createPropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idparam.dto';

@Controller('property')
export class PropertyController {

    @Get()
    findAll(){ 
        return "all properties";
    }
    
    @Post()
    @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
    createPropery(@Body() property:createPropertyDto){
        return property;
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe)id){
        return `id is ${id}` ;
    }

    @Patch(':id')
    update(@Param() param :IdParamDto,@Body()body:createPropertyDto){
        return body;
    }

}

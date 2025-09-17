import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { createPropertyDto } from './dto/createProperty.dto';
import { updatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULTPAGESIZE } from 'src/utils/constants';

@Injectable()
export class PropertyService {
    constructor(@InjectRepository(Property) private propertyRepo:Repository<Property>){

    }

    async create(dto:createPropertyDto){
       return await this.propertyRepo.save(dto)
    }

    async findOne(id:number){
       const property = await this.propertyRepo.findOne({
            where:{
                id
            }
        });
        if(!property){
            throw new NotFoundException();
        }

        return property;
    }
    

    async findAll(pagination:PaginationDto){
        return await this.propertyRepo.find({
            skip:pagination.skip, 
            take:pagination.limit ?? DEFAULTPAGESIZE
        });
    }

    async update(id:number,dto:updatePropertyDto){
        return await this.propertyRepo.update({id},dto);
    }

    async delete(id:number){
        return await this.propertyRepo.delete({id});
    }
}

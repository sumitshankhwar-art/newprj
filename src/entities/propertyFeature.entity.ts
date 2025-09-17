import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class PropertyFeature{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    bedrooms:number;

    @Column()
    bathrooms:number;

    @Column()
    parkingSpots:number;

    @Column()
    hasPool:boolean;

    @Column()
    hasYard:boolean;

    @Column()
    hasBalcony:boolean;
    
    @OneToOne(()=>Property,(property)=>property.propertyFeature)
    @JoinColumn()
    property:Property;
}
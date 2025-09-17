import { Column,BeforeInsert,
    JoinTable,CreateDateColumn, Entity, PrimaryGeneratedColumn,OneToMany,ManyToMany} from "typeorm";
import { Property } from "./property.entity";
import * as bcrypt from 'bcrypt'; 

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    avtarUrl:string;

    @CreateDateColumn()
    createdAt:Date;

    @OneToMany(()=>Property,(property)=>property.user)
    properties:Property[];
    
    @ManyToMany(()=>Property,(property)=>property.likedBY)
    @JoinTable({name:"user_liked_properties"})
    likedProperties:Property[];

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password,10);
    }
}
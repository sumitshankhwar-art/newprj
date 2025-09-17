import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";
import { Property } from "src/entities/property.entity";
import { PropertyFeature } from "src/entities/propertyFeature.entity";
import { User } from "src/entities/user.entity";


export default ():PostgresConnectionOptions =>({
        url:process.env.DBURL,
        type:"postgres",
        port:3306,
        entities:[Property,PropertyFeature,User],
        synchronize:true
})


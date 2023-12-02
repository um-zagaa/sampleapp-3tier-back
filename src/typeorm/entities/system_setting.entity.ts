/* user.entity.ts */
/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'system_settings' })
export class SystemSettingEntitiy {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    value: string;

    // @Column()
    // createdAt: Date;

    // @Column()
    // updatedAt: Date;

}

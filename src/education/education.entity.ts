import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { CommonEntity } from "src/common/Common.entity";
import { UserEntity } from "src/user/User.entity";
import { EDegreeType } from "src/common/enum";

@Entity({ name: "educations" })
export class EducationEntity extends CommonEntity {
  @Column({ type: "varchar", length: 100, default: null  })
  schoolName: string;

  @Column({
    type: "enum",
    enum: EDegreeType,
    default: EDegreeType.OTHER,

    
  })
  degree: EDegreeType;

  @Column({ type: "varchar", length: 100, default: null  })
  faculty: string;

  @Column({ type: "datetime", default: null  })
  startDate: Date;

  @Column({type: "datetime", nullable: true })
  endDate: Date;

  @Column({ type: "varchar", default: null  })
  imageUrl?: string;
}